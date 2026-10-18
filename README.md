# All Into Art — Game Development & 3D Art Studio Website

Official website for **All Into Art**, a game development company and 3D digital art studio founded by **Haider Shaikh**.

Engineered for seamless, zero-config hosting on **GitHub Pages**, with responsive layouts, modern AAA dark gaming aesthetics, an interactive 3D asset turntable inspector, and dynamic showcase galleries linked directly to Haider Shaikh's [ArtStation Album #3654607](https://www.artstation.com/haidershaikh6/albums/3654607).

---

## 🚀 Live Hosting on GitHub Pages (Quick Setup)

Hosting this website on GitHub takes less than 2 minutes:

### Step 1: Initialize Git & Push to GitHub
Open your terminal in this project folder (`f:\Antigravity Website Project`) and run:

```bash
# 1. Initialize git (if not already done)
git init

# 2. Add all project files
git add .

# 3. Commit the initial release
git commit -m "Initial release of All Into Art studio website"

# 4. Create a repository on github.com (e.g. 'all-into-art-website')
# Then link your remote and push to the 'main' branch:
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. On GitHub, navigate to your repository's **Settings** tab.
2. In the left sidebar, click **Pages** (under the "Code and automation" section).
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `main` and folder `/ (root)`
4. Click **Save**.
5. Within 60 seconds, GitHub will provide your live URL:
   ```
   https://<your-username>.github.io/<your-repo-name>/
   ```

*(Optional)* If you have a custom domain (e.g., `allintoart.com`), enter it in the **Custom domain** field in the GitHub Pages settings, and add a `CNAME` file containing your domain name in the root folder.

---

## ✨ Features & Architecture

- **Unreal Engine 5 Album #3654607 Spotlight**:
  Direct integration with Haider Shaikh's ArtStation album (`https://www.artstation.com/haidershaikh6/albums/3654607`), highlighting Lumen lighting, Nanite geometry, and environment art breakdowns.
- **Interactive 3D Turntable & Topology Inspector**:
  Real-time HTML5 Canvas 3D mesh viewer allowing clients to click & drag to rotate 360°, inspect **Shaded PBR**, **Matte Clay**, **Wireframe Mesh**, and **World Normals** passes.
- **Dynamic Portfolio Gallery**:
  Category filtering across **Unreal Engine 5**, **Environment Art**, **Characters & Creatures**, and **Animations & Tech Art** with detailed modal lightboxes containing polycounts, texture resolutions, and software stacks.
- **Cinematic Studio Showreel Video Player**:
  Interactive video showcase modal for Unreal Engine trailers and environment walk-throughs.
- **Interactive Particle Canvas Background**:
  Ambient futuristic cyber constellation effects that react to mouse movements.
- **Studio Capabilities & Production Pipeline**:
  Detailed 6-pillar service overview and 4-step production sequence (Concept -> High-Poly -> PBR Shading -> UE5 Integration).
- **Client Inquiry & Quote System**:
  Project brief form with instant feedback, mailto integration, and quick-copy Discord handle button (`allintoarts`).
- **Zero Build Step Dependency**:
  Pure modern HTML5, CSS3, and ES6 JavaScript. No Node.js build, bundler, or npm install required. Works instantly out of the box.

---

## 📁 Project Structure

```
Antigravity Website Project/
├── index.html                  # Main landing page & complete interactive experience
├── .nojekyll                   # Bypasses Jekyll processing on GitHub Pages
├── README.md                   # Hosting guide & documentation
└── assets/
    ├── css/
    │   ├── style.css           # Modern dark gaming aesthetic, layout & responsive design
    │   └── animations.css      # Ambient glow, keyframes, cyber grids & scroll reveals
    ├── js/
    │   ├── portfolio-data.js   # Structured database of projects, specs & ArtStation links
    │   ├── particles.js        # Interactive HTML5 canvas cyber particles
    │   ├── turntable-viewer.js # 3D real-time mesh turntable & topology inspector
    │   └── main.js             # Navigation, filter system, modals & form logic
    └── images/
        ├── allintoart-logo.jpg # Studio emblem
        ├── hero-cinematic.jpg  # Banner showcase
        ├── project-ue5-scifi-city.jpg
        ├── project-ue5-ancient-temple.jpg
        ├── project-character-cyber-soldier.jpg
        ├── project-character-fantasy-hero.jpg
        ├── project-creature-beast.jpg
        ├── project-environment-bunker.jpg
        └── project-anim-action.jpg
```

---

## 🛠️ Modifying & Adding Projects

To add or modify portfolio items, open `assets/js/portfolio-data.js`:

```javascript
{
  id: "your-project-id",
  title: "Your Project Title",
  category: "unreal", // 'unreal' | 'environment' | 'characters' | 'animation'
  categoryLabel: "Unreal Engine 5",
  albumId: "3654607",
  thumbnail: "assets/images/your-thumb.jpg",
  fullImage: "assets/images/your-thumb.jpg",
  shortDesc: "Brief description for card...",
  fullDesc: "Comprehensive description for modal...",
  software: ["Unreal Engine 5", "ZBrush", "Substance Painter"],
  specs: {
    triangles: "45,000 Tris",
    textures: "4K PBR",
    lighting: "Lumen Dynamic GI"
  },
  artstationUrl: "https://www.artstation.com/haidershaikh6/albums/3654607"
}
```

---

## 👤 Company & Artist Credits

- **Company**: All Into Art
- **Founder / Lead 3D Artist**: Haider Shaikh
- **ArtStation Portfolio**: [haidershaikh6.artstation.com](https://haidershaikh6.artstation.com/)
- **Featured ArtStation Album**: [Album 3654607](https://www.artstation.com/haidershaikh6/albums/3654607)
- **Discord**: `allintoarts`
- **Location**: Karachi, Pakistan / Global Remote Collaboration
