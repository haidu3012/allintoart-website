/**
 * ALL INTO ART - Portfolio Projects Database
 * Linked to Haider Shaikh's ArtStation portfolio and album 3654607
 * https://www.artstation.com/haidershaikh6/albums/3654607
 */

const PORTFOLIO_PROJECTS = [
  {
    id: "ue5-cyber-city",
    title: "Neo-Kyoto Alleyway - UE5 Lumen Real-time",
    category: "unreal",
    categoryLabel: "Unreal Engine 5",
    albumId: "3654607",
    isAlbumHighlight: true,
    thumbnail: "assets/images/project-ue5-scifi-city.jpg",
    fullImage: "assets/images/project-ue5-scifi-city.jpg",
    shortDesc: "Real-time cyberpunk environment crafted in Unreal Engine 5 utilizing Lumen global illumination, Nanite virtualized geometry, and custom PBR shader pipelines.",
    fullDesc: "A complete next-generation real-time game environment designed for an unannounced cyberpunk narrative title. Built entirely in Unreal Engine 5, this environment showcases complex real-time lighting through Lumen, volumetric steam and fog via Niagara particle emitters, and high-density Nanite architectural kitbashing. PBR materials were authored in Substance 3D Painter with wetness and puddle vertex-painting blend shaders.",
    software: ["Unreal Engine 5", "Substance Painter", "Maya", "Blender"],
    specs: {
      triangles: "2.4M (Nanite Virtualized)",
      textures: "4K PBR (Albedo, Normal, Roughness, Metal, AO, Emissive)",
      lighting: "Lumen Dynamic Global Illumination & Reflections",
      framerate: "60+ FPS on RTX 3070 at 1440p",
      pipeline: "Modular Kitbash + Decal Work + Trim Sheets"
    },
    artstationUrl: "https://www.artstation.com/haidershaikh6/albums/3654607"
  },
  {
    id: "ue5-ancient-temple",
    title: "Sanctum of the Mist - Unreal Engine 5",
    category: "environment",
    categoryLabel: "Environment Art",
    albumId: "3654607",
    isAlbumHighlight: true,
    thumbnail: "assets/images/project-ue5-ancient-temple.jpg",
    fullImage: "assets/images/project-ue5-ancient-temple.jpg",
    shortDesc: "Mystical temple ruins tucked within highland mountains, featuring volumetric atmospheric god rays, Nanite rock formations, and dense photogrammetry foliage.",
    fullDesc: "An expansive atmospheric fantasy environment study exploring ancient civilizations reclaimed by nature. Developed with Unreal Engine 5's World Partition system, this level features detailed hero rock assets sculpted in ZBrush, procedural foliage distribution, volumetric exponential fog, and dynamic sky lighting. Every asset is optimized for real-time game interaction with custom collision hulls and LOD transitions.",
    software: ["Unreal Engine 5", "ZBrush", "Substance Designer", "Photoshop"],
    specs: {
      triangles: "3.2M Triangles across level",
      textures: "4K Master Landscape Material & Trim Sheets",
      lighting: "Dynamic Sun & Directional Sky Light with Volumetric Fog",
      features: "Procedural Foliage & Water Shader with Caustics",
      pipeline: "High-Poly Sculpting -> Nanite -> Engine Integration"
    },
    artstationUrl: "https://www.artstation.com/haidershaikh6/albums/3654607"
  },
  {
    id: "char-cyber-soldier",
    title: "Apex Vanguard - Tactical Cybernetic Commando",
    category: "characters",
    categoryLabel: "Characters & Creatures",
    albumId: "3654607",
    isAlbumHighlight: false,
    thumbnail: "assets/images/project-character-cyber-soldier.jpg",
    fullImage: "assets/images/project-character-cyber-soldier.jpg",
    shortDesc: "AAA game-ready 3D tactical operative character with modular hard-surface exoskeleton, emissive heads-up visor, and clean subdivision-ready topology.",
    fullDesc: "Designed as a playable hero archetype for modern tactical shooters. The high-poly model was sculpted in ZBrush with precision hard-surface booleans and creasing, retopologized in Maya for optimal animation deformation around joints, and textured in Substance 3D Painter with realistic micro-scratches, carbon fiber weaves, and tactical fabric weaves. Fully weighted to the UE5 Mannequin skeleton with IK rig compatibility.",
    software: ["ZBrush", "Maya", "Substance 3D Painter", "Marvelous Designer", "UE5"],
    specs: {
      triangles: "58,400 Triangles (Full Body & Gear)",
      textures: "3x 4K UDIM Texture Sets (Head, Body Armor, Equipment)",
      rigging: "Unreal Engine 5 Mannequin & Control Rig Compatible",
      shaders: "Layered PBR with Clearcoat & Emissive Controls",
      pipeline: "Concept -> ZBrush Sculpt -> Retopo -> Bake -> Rig"
    },
    artstationUrl: "https://www.artstation.com/haidershaikh6"
  },
  {
    id: "char-fantasy-hero",
    title: "Valerius - The Sun Knight RPG Hero",
    category: "characters",
    categoryLabel: "Characters & Creatures",
    albumId: "3654607",
    isAlbumHighlight: false,
    thumbnail: "assets/images/project-character-fantasy-hero.jpg",
    fullImage: "assets/images/project-character-fantasy-hero.jpg",
    shortDesc: "Heroic high-fantasy knight featuring intricately engraved ceremonial steel plate armor, simulation-ready velvet cloak, and game-optimized hair cards.",
    fullDesc: "A masterclass in character modeling and material variation. Valerius combines ornate chased steel plate armor, supple weathered leather straps, and realistic cloth folds generated in Marvelous Designer. Hair cards were crafted with individual alpha strands and anisotropic specular highlights in Unreal Engine's strand/card hair shader. Tested with cloth physics simulation inside UE5 Chaos Physics engine.",
    software: ["ZBrush", "Marvelous Designer", "Maya", "Substance Painter", "Marmoset"],
    specs: {
      triangles: "64,200 Triangles (Character + Weapon + Cloak)",
      textures: "4K PBR Metalness/Roughness Workflow",
      clothPhysics: "Unreal Engine Chaos Cloth Simulation Setup",
      rigging: "Facial Blendshapes + Twist Bones for Forearms & Thighs",
      pipeline: "High-Poly Ornamentation -> Marmoset Bake -> UE5 Shading"
    },
    artstationUrl: "https://www.artstation.com/haidershaikh6"
  },
  {
    id: "creature-beast",
    title: "Gorgon Behemoth - Bio-Mechanical Predator",
    category: "characters",
    categoryLabel: "Characters & Creatures",
    albumId: "3654607",
    isAlbumHighlight: false,
    thumbnail: "assets/images/project-creature-beast.jpg",
    fullImage: "assets/images/project-creature-beast.jpg",
    shortDesc: "Aggressive game boss creature featuring layered carapace plating, exposed bio-luminescent musculature, and secondary animation physics.",
    fullDesc: "Created as an apex predator boss encounter for a dark sci-fi action RPG. Features dynamic creature topology designed to accommodate dramatic quadruped and bipedal animations without polygon pinching. The texturing combines organic reptilian scales with synthetic metallic augments and glowing energy veins that flare based on in-engine gameplay health states.",
    software: ["ZBrush", "Substance 3D Painter", "Blender", "Unreal Engine 5"],
    specs: {
      triangles: "76,800 Triangles (Game-Ready Boss Asset)",
      textures: "2x 4K PBR Sets with Dynamic Emissive Vector Parameters",
      rigging: "Full Quadruped Rig with Tail & Jaw Dynamics",
      shaders: "Subsurface Scattering (SSS) Skin Shader in UE5",
      pipeline: "Digital Sculpt -> Poly Reduction -> PBR Paint -> Unreal"
    },
    artstationUrl: "https://www.artstation.com/haidershaikh6"
  },
  {
    id: "env-bunker-interior",
    title: "Sector-09 Subterranean Research Facility",
    category: "environment",
    categoryLabel: "Environment Art",
    albumId: "3654607",
    isAlbumHighlight: false,
    thumbnail: "assets/images/project-environment-bunker.jpg",
    fullImage: "assets/images/project-environment-bunker.jpg",
    shortDesc: "Modular underground sci-fi bunker environment kit featuring industrial architecture, emergency strobe lighting, and physicalized props.",
    fullDesc: "Constructed using a strictly measured grid-aligned modular architectural kit consisting of 38 interlockable wall, ceiling, floor, and doorway pieces. Accompanied by over 50 prop assets (consoles, conduits, server racks, hazardous containers). Master materials feature vertex-paintable grunge, water damage, and rust masks to create extensive visual variety from a compact texture memory footprint.",
    software: ["Unreal Engine 5", "Maya", "Substance Designer", "Photoshop"],
    specs: {
      modularity: "38 Snappable Architectural Modules + 50 Unique Props",
      textures: "Unique Trim Sheets + RGB Packed Channel Masking",
      memoryFootprint: "Ultra-compact (Under 180MB VRAM texture footprint)",
      lighting: "Real-time Point & Rect Lights with IES Profiles",
      pipeline: "Grid Metrics -> Low-Poly Kits -> Trim Mapping -> UE5 Level"
    },
    artstationUrl: "https://www.artstation.com/haidershaikh6/albums/3654607"
  },
  {
    id: "anim-combat-reel",
    title: "Kinetic Strike - Gameplay Combat & Motion Suite",
    category: "animation",
    categoryLabel: "Animations & Tech Art",
    albumId: "3654607",
    isAlbumHighlight: false,
    thumbnail: "assets/images/project-anim-action.jpg",
    fullImage: "assets/images/project-anim-action.jpg",
    shortDesc: "High-octane melee and ranged combat animation set with root motion, combo branching blendspaces, and Unreal Engine Sequencer camera choreography.",
    fullDesc: "A complete combat animation suite engineered for responsive third-person action gameplay. Hand-keyed in Maya with extreme attention to weight, anticipation, hit stops, and follow-through physics. Integrated directly into Unreal Engine 5's Animation Blueprints with State Machines, Blend Spaces, Motion Warping, and Sequencer cinematic kill-cam transitions.",
    software: ["Maya", "Unreal Engine 5 Control Rig", "Sequencer", "MotionBuilder"],
    specs: {
      animations: "24 Custom Motion Clips (Idle, Runs, 4-hit Combos, Dodges, Executions)",
      engineSetup: "UE5 Blendspaces, Aim Offsets & Motion Warping",
      rigging: "Custom Humanoid Rig with Space Switching & Dynamic Secondary Bones",
      framerate: "Keyframed at 60 FPS with clean curve tangents",
      pipeline: "Choreography -> Maya Keying -> UE5 Retargeting & AnimBP"
    },
    artstationUrl: "https://www.artstation.com/haidershaikh6"
  },
  {
    id: "ue5-hero-world",
    title: "Aethelgard - Monolithic Citadel Overlook",
    category: "unreal",
    categoryLabel: "Unreal Engine 5",
    albumId: "3654607",
    isAlbumHighlight: true,
    thumbnail: "assets/images/hero-cinematic.jpg",
    fullImage: "assets/images/hero-cinematic.jpg",
    shortDesc: "Flagship world-building showcase uniting towering monolithic monuments with futuristic architectural spires under dramatic celestial skyboxes.",
    fullDesc: "The pinnacle of All Into Art's environmental world-building philosophy. This grand landscape demonstrates complete mastery over scale, atmospheric composition, distance fog falloff, and multi-layered narrative depth. Features custom volumetric cloud materials, celestial aurora effects, and seamless transitions from distant vista geometry to foreground hero props.",
    software: ["Unreal Engine 5", "ZBrush", "World Machine", "Substance 3D", "Photoshop"],
    specs: {
      worldScale: "4km x 4km Seamless Playable Terrain",
      features: "Volumetric Clouds, Dynamic Skybox, Horizon Ocean Shader",
      geometry: "Nanite Enabled High-Poly Architecture",
      lighting: "Lumen Sun & Sky with Directional Light Shafts",
      pipeline: "World Machine Heightmap -> UE5 Landscape -> Nanite Meshes"
    },
    artstationUrl: "https://www.artstation.com/haidershaikh6/albums/3654607"
  }
];
