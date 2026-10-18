/**
 * ALL INTO ART - Interactive 3D Asset Turntable & Topology Inspector
 * Provides an interactive 3D model viewer simulating game asset inspection
 * Modes: Shaded PBR, Clay Sculpt, Wireframe, World Normals
 */

(function () {
  const canvas = document.getElementById('turntableCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let currentMode = 'shaded'; // 'shaded' | 'clay' | 'wireframe' | 'normals'
  let autoRotate = true;
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };
  let rotation = { x: 0.35, y: 0.5 };
  let zoom = 1.0;
  let lightAngle = 0.8;

  // Generate a procedural 3D Game Asset Geometry (Sci-Fi Cybernetic Helmet/Orb)
  const vertices = [];
  const faces = [];

  function generateGeometry() {
    vertices.length = 0;
    faces.length = 0;

    const latBands = 18;
    const longBands = 24;
    const radius = 130;

    // Create vertices with sci-fi facets
    for (let lat = 0; lat <= latBands; lat++) {
      const theta = (lat * Math.PI) / latBands;
      const sinTheta = Math.sin(theta);
      const cosTheta = Math.cos(theta);

      for (let lon = 0; lon <= longBands; lon++) {
        const phi = (lon * 2 * Math.PI) / longBands;
        const sinPhi = Math.sin(phi);
        const cosPhi = Math.cos(phi);

        // Add algorithmic sci-fi surface displacement / armor plates
        let r = radius;
        if (lat > 5 && lat < 13) {
          // Angular visor and cheek plates
          const plateFreq = Math.cos(phi * 4);
          r += plateFreq > 0.2 ? 14 : -6;
        }
        if (lat >= 13) {
          // Collar / neck mount
          r -= 18;
        }

        const x = r * cosPhi * sinTheta;
        const y = -r * cosTheta; // Invert Y for screen coords
        const z = r * sinPhi * sinTheta;

        vertices.push({ x, y, z });
      }
    }

    // Build quad faces (split into triangles for 3D sorting)
    for (let lat = 0; lat < latBands; lat++) {
      for (let lon = 0; lon < longBands; lon++) {
        const first = lat * (longBands + 1) + lon;
        const second = first + longBands + 1;

        faces.push([first, second, first + 1]);
        faces.push([second, second + 1, first + 1]);
      }
    }
  }

  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth || 800;
    height = canvas.height = canvas.parentElement.offsetHeight || 500;
  }

  // 3D Matrix Math & Projection
  function project(p, rot) {
    // Rotate Y
    const cosY = Math.cos(rot.y);
    const sinY = Math.sin(rot.y);
    let x1 = p.x * cosY + p.z * sinY;
    let z1 = -p.x * sinY + p.z * cosY;

    // Rotate X
    const cosX = Math.cos(rot.x);
    const sinX = Math.sin(rot.x);
    let y2 = p.y * cosX - z1 * sinX;
    let z2 = p.y * sinX + z1 * cosX;

    // Perspective projection
    const fov = 420;
    const distance = 460 / zoom;
    const scale = fov / (distance + z2);

    return {
      x: x1 * scale + width / 2,
      y: y2 * scale + height / 2,
      z: z2,
      scale: scale,
      normalZ: z1
    };
  }

  // Render Loop
  function render() {
    ctx.clearRect(0, 0, width, height);

    if (autoRotate && !isDragging) {
      rotation.y += 0.008;
    }

    // Transform and project all vertices
    const projected = vertices.map(v => project(v, rotation));

    // Calculate face normals and depths for painter's algorithm
    const renderableFaces = [];
    const lightDir = {
      x: Math.sin(lightAngle),
      y: -0.6,
      z: Math.cos(lightAngle)
    };
    // Normalize light
    const lLen = Math.sqrt(lightDir.x * lightDir.x + lightDir.y * lightDir.y + lightDir.z * lightDir.z);
    lightDir.x /= lLen; lightDir.y /= lLen; lightDir.z /= lLen;

    for (let i = 0; i < faces.length; i++) {
      const f = faces[i];
      const p1 = projected[f[0]];
      const p2 = projected[f[1]];
      const p3 = projected[f[2]];

      // Back-face culling using 2D screen cross product
      const ax = p2.x - p1.x;
      const ay = p2.y - p1.y;
      const bx = p3.x - p1.x;
      const by = p3.y - p1.y;
      const cross = ax * by - ay * bx;

      if (cross < 0) {
        // Face is facing the camera
        const avgZ = (p1.z + p2.z + p3.z) / 3;

        // Calculate 3D normal for lighting
        const v1 = vertices[f[0]];
        const v2 = vertices[f[1]];
        const v3 = vertices[f[2]];

        const vax = v2.x - v1.x, vay = v2.y - v1.y, vaz = v2.z - v1.z;
        const vbx = v3.x - v1.x, vby = v3.y - v1.y, vbz = v3.z - v1.z;

        let nx = vay * vbz - vaz * vby;
        let ny = vaz * vbx - vax * vbz;
        let nz = vax * vby - vay * vbx;
        const nlen = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
        nx /= nlen; ny /= nlen; nz /= nlen;

        // Rotate normal to world space
        const cosY = Math.cos(rotation.y);
        const sinY = Math.sin(rotation.y);
        let rnx = nx * cosY + nz * sinY;
        let rnz = -nx * sinY + nz * cosY;

        const cosX = Math.cos(rotation.x);
        const sinX = Math.sin(rotation.x);
        let rny = ny * cosX - rnz * sinX;
        let rnz2 = ny * sinX + rnz * cosX;

        // Dot product for diffuse lighting
        const dot = Math.max(0, rnx * lightDir.x + rny * lightDir.y + rnz2 * lightDir.z);
        const rim = Math.pow(1 - Math.max(0, rnz2), 3); // Rim lighting

        renderableFaces.push({
          p1, p2, p3,
          avgZ,
          dot,
          rim,
          normal: { x: rnx, y: rny, z: rnz2 }
        });
      }
    }

    // Sort by depth (farthest first)
    renderableFaces.sort((a, b) => b.avgZ - a.avgZ);

    // Draw faces according to current visual mode
    for (let i = 0; i < renderableFaces.length; i++) {
      const face = renderableFaces[i];
      const { p1, p2, p3, dot, rim, normal } = face;

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.lineTo(p3.x, p3.y);
      ctx.closePath();

      if (currentMode === 'shaded') {
        // Metallic Cybernetic PBR Shader
        const baseShade = Math.floor(25 + dot * 160 + rim * 70);
        const cyanTint = Math.floor(dot * 230);
        ctx.fillStyle = `rgb(${Math.min(255, baseShade)}, ${Math.min(255, baseShade + Math.floor(cyanTint * 0.4))}, ${Math.min(255, baseShade + cyanTint)})`;
        ctx.fill();

        ctx.strokeStyle = 'rgba(0, 242, 254, 0.15)';
        ctx.lineWidth = 0.5;
        ctx.stroke();

      } else if (currentMode === 'clay') {
        // High-end ArtStation Matte Clay Sculpt
        const shade = Math.floor(55 + dot * 180 + rim * 20);
        ctx.fillStyle = `rgb(${shade}, ${shade}, ${Math.floor(shade * 0.98)})`;
        ctx.fill();

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 0.5;
        ctx.stroke();

      } else if (currentMode === 'wireframe') {
        // Pure Holographic Game-Ready Wireframe
        ctx.fillStyle = 'rgba(8, 10, 16, 0.85)';
        ctx.fill();

        ctx.strokeStyle = `rgba(0, 242, 254, ${Math.min(1, 0.35 + dot * 0.65)})`;
        ctx.lineWidth = 1;
        ctx.stroke();

      } else if (currentMode === 'normals') {
        // World Space Normal Vector Visualization (RGB)
        const r = Math.floor((normal.x * 0.5 + 0.5) * 255);
        const g = Math.floor((normal.y * 0.5 + 0.5) * 255);
        const b = Math.floor((normal.z * 0.5 + 0.5) * 255);
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.fill();

        ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }

    requestAnimationFrame(render);
  }

  // Mouse & Touch Interaction
  canvas.addEventListener('mousedown', (e) => {
    isDragging = true;
    previousMousePosition = { x: e.clientX, y: e.clientY };
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - previousMousePosition.x;
    const deltaY = e.clientY - previousMousePosition.y;

    rotation.y += deltaX * 0.009;
    rotation.x += deltaY * 0.009;

    // Clamp vertical tilt
    rotation.x = Math.max(-1.1, Math.min(1.1, rotation.x));

    previousMousePosition = { x: e.clientX, y: e.clientY };
  });

  // Touch handlers for mobile
  canvas.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging || e.touches.length !== 1) return;

    const deltaX = e.touches[0].clientX - previousMousePosition.x;
    const deltaY = e.touches[0].clientY - previousMousePosition.y;

    rotation.y += deltaX * 0.012;
    rotation.x += deltaY * 0.012;
    rotation.x = Math.max(-1.1, Math.min(1.1, rotation.x));

    previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, { passive: true });

  // Mode Selection Buttons
  const modeButtons = document.querySelectorAll('.mode-btn');
  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentMode = btn.getAttribute('data-mode') || 'shaded';
    });
  });

  // Auto-Rotate Toggle
  const autoRotateCheckbox = document.getElementById('toggleAutoRotate');
  if (autoRotateCheckbox) {
    autoRotateCheckbox.addEventListener('change', (e) => {
      autoRotate = e.target.checked;
    });
  }

  // Initialize
  window.addEventListener('resize', resize);
  generateGeometry();
  resize();
  render();
})();
