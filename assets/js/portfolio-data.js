/**
 * ALL INTO ART - Portfolio Database
 * Actual artworks directly from Haider Shaikh's ArtStation Album #3654607
 * https://www.artstation.com/haidershaikh6/albums/3654607
 */

const PORTFOLIO_PROJECTS = [
  {
    id: "john-stewart-model",
    title: "Green Lantern John Stewart 3D Character Model",
    category: "characters",
    categoryLabel: "Character Art",
    albumId: "3654607",
    isFeatured: true,
    thumbnail: "assets/images/portfolio/green-lantern-john-stewart-3d-character-model.webp",
    fullImage: "assets/images/portfolio/green-lantern-john-stewart-3d-character-model.webp",
    shortDesc: "Highly detailed game-ready hero character model of John Stewart (DC Comics Green Lantern) with intricate tactical suit materials and anatomy.",
    fullDesc: "Complete game-ready 3D character pipeline for John Stewart / Green Lantern. Sculpted with anatomical precision in ZBrush, retopologized for fluid combat deformation in Maya, and textured with realistic tactical cloth and emissive ring-power accents in Substance 3D Painter.",
    software: ["ZBrush", "Autodesk Maya", "Substance 3D Painter", "Unreal Engine 5"],
    specs: {
      type: "Game-Ready Hero Character",
      workflow: "High-Poly Sculpt -> Low-Poly Retopology -> PBR Bake",
      texturing: "4K PBR Texture Maps (Albedo, Normal, Roughness, Metallic, Emissive)",
      rigging: "Humanoid Skeletal Mesh Compatible",
      platform: "PC / Next-Gen Console"
    },
    artstationUrl: "https://www.artstation.com/artwork/vzDL4x"
  },
  {
    id: "john-stewart-cinematic",
    title: "Green Lantern Aaron Pierre Cinematic",
    category: "characters",
    categoryLabel: "Character & Cinematic",
    albumId: "3654607",
    isFeatured: true,
    thumbnail: "assets/images/portfolio/green-lantern-john-stewart-aaron-pierre-character-model-cinematic.webp",
    fullImage: "assets/images/portfolio/green-lantern-john-stewart-aaron-pierre-character-model-cinematic.webp",
    shortDesc: "Cinematic portrait and likeness sculpt of Aaron Pierre as John Stewart / Green Lantern with cinematic camera and lighting passes.",
    fullDesc: "Facial likeness study and high-fidelity cinematic turnaround of Aaron Pierre as the iconic Green Lantern. Explores realistic skin micro-details, pore maps, specular roughness breakup, and dramatic studio rim lighting.",
    software: ["ZBrush", "Maya", "Substance Painter", "Unreal Engine 5"],
    specs: {
      type: "Cinematic Likeness & Character Model",
      shaders: "Subsurface Scattering (SSS) Skin Shader",
      lighting: "Unreal Engine 5 Lumen Cinematic Setup",
      render: "Real-time Engine Viewport Render"
    },
    artstationUrl: "https://www.artstation.com/artwork/o0bv0z"
  },
  {
    id: "aang-character-model",
    title: "Avatar The Last Airbender Aang 3D Model",
    category: "characters",
    categoryLabel: "Character Art",
    albumId: "3654607",
    isFeatured: true,
    thumbnail: "assets/images/portfolio/avatar-the-last-airbender-aang-3d-character-model.webp",
    fullImage: "assets/images/portfolio/avatar-the-last-airbender-aang-3d-character-model.webp",
    shortDesc: "Stylized game-ready 3D character sculpt of Aang from Avatar: The Last Airbender, capturing iconic silhouette and expressive face.",
    fullDesc: "Faithful 3D interpretation of Aang from Avatar: The Last Airbender. Modeled with clean stylized forms, hand-crafted fabric folds on monk vestments, and glowing arrow tattoos for real-time gameplay integration.",
    software: ["ZBrush", "Autodesk Maya", "Substance 3D", "Marmoset"],
    specs: {
      type: "Stylized Game-Ready Character",
      topology: "Animation-Ready Clean Edge Loops",
      textures: "Stylized PBR Hand-Crafted Shaders",
      rigging: "Facial Blendshapes & Full Body Rig"
    },
    artstationUrl: "https://www.artstation.com/artwork/dLKN4W"
  },
  {
    id: "billy-butcher",
    title: "Billy Butcher Likeness Model",
    category: "characters",
    categoryLabel: "Character Art",
    albumId: "3654607",
    isFeatured: false,
    thumbnail: "assets/images/portfolio/billy-butcher.webp",
    fullImage: "assets/images/portfolio/billy-butcher.webp",
    shortDesc: "Gritty likeness sculpt and texturing study of Billy Butcher (Karl Urban), featuring rugged skin pores, hair groom, and weathered leather coat.",
    fullDesc: "Detailed likeness sculpt capturing the intense expression and trademark scowl of Billy Butcher. High-poly sculpting in ZBrush with micro-pores, skin wrinkling, and Substance Painter leather detailing.",
    software: ["ZBrush", "Maya", "Substance 3D Painter"],
    specs: {
      type: "High-Poly Likeness Sculpt",
      details: "Micro-Pore Alphas & Wrinkle Geometry",
      texturing: "Weathered Leather & PBR Skin Shaders"
    },
    artstationUrl: "https://www.artstation.com/artwork/kwQO8K"
  },
  {
    id: "scifi-lobby",
    title: "Sci-Fi Futuristic Lobby Environment",
    category: "unreal",
    categoryLabel: "Unreal Engine & Real-time",
    albumId: "3654607",
    isFeatured: true,
    thumbnail: "assets/images/portfolio/sci-fi-futuristic-lobby.webp",
    fullImage: "assets/images/portfolio/sci-fi-futuristic-lobby.webp",
    shortDesc: "High-concept sci-fi interior environment built in Unreal Engine with clean architectural paneling, emissive neon strips, and real-time reflections.",
    fullDesc: "Complete futuristic architectural level designed and lit in Unreal Engine. Utilizes modular wall and floor kits, custom emissive light strips, trim sheets for minimal texture memory, and real-time Lumen reflections on polished surfaces.",
    software: ["Unreal Engine 5", "Autodesk Maya", "Substance Designer", "Photoshop"],
    specs: {
      type: "Real-time Sci-Fi Level Design",
      pipeline: "Grid-Aligned Modular Architectural Kit",
      lighting: "Lumen Dynamic Lighting & Emissive Bounces",
      optimization: "Optimized for High Framerate Real-Time"
    },
    artstationUrl: "https://www.artstation.com/artwork/ayo1ez"
  },
  {
    id: "stylized-windmill",
    title: "Stylized Windmill Environment",
    category: "environments",
    categoryLabel: "Environment & Architecture",
    albumId: "3654607",
    isFeatured: true,
    thumbnail: "assets/images/portfolio/stylized-windmill.webp",
    fullImage: "assets/images/portfolio/stylized-windmill.webp",
    shortDesc: "Vibrant fantasy stylized windmill asset set in picturesque rolling terrain with custom stylized stone, wood grain, and cloth sails.",
    fullDesc: "Charming fantasy stylized windmill model engineered for stylized RPG and adventure titles. Hand-sculpted stone masonry, timber framing with chunky bevels, and cloth sail blades rigged for gentle rotation.",
    software: ["Autodesk Maya", "ZBrush", "Substance 3D Painter", "Unreal Engine"],
    specs: {
      type: "Hero Fantasy Architecture Asset",
      style: "Stylized PBR Hand-Sculpted Textures",
      rigging: "Spinning Sail Rotor Bones",
      engine: "Unreal Engine Real-time Shader"
    },
    artstationUrl: "https://www.artstation.com/artwork/AolXGz"
  },
  {
    id: "windmill-3d-model",
    title: "Windmill 3D Model Asset",
    category: "environments",
    categoryLabel: "Environment & Architecture",
    albumId: "3654607",
    isFeatured: false,
    thumbnail: "assets/images/portfolio/windmill-3d-model.webp",
    fullImage: "assets/images/portfolio/windmill-3d-model.webp",
    shortDesc: "Medieval rustic windmill building model with stone foundation, weathered timber beams, and detailed mechanism staging.",
    fullDesc: "A modular medieval windmill asset created for open-world game levels. Constructed with reusable trim sheets and tileable shingles for maximum memory efficiency across expansive game worlds.",
    software: ["Maya", "Substance Painter", "Unreal Engine"],
    specs: {
      type: "Modular Medieval Building",
      textures: "PBR Material Trim Sheets",
      engineReady: "Collision & LODs Configured"
    },
    artstationUrl: "https://www.artstation.com/artwork/o0bvYk"
  },
  {
    id: "blacksmith-model",
    title: "Blacksmith Workshop 3D Model",
    category: "environments",
    categoryLabel: "Environment & Architecture",
    albumId: "3654607",
    isFeatured: false,
    thumbnail: "assets/images/portfolio/blacksmith-3d-model.webp",
    fullImage: "assets/images/portfolio/blacksmith-3d-model.webp",
    shortDesc: "Intricate medieval blacksmith workshop with stone forge, anvil, hearth chimney, and handcrafted wooden overhangs.",
    fullDesc: "Atmospheric blacksmith shop architecture designed for fantasy village settings. Features detailed stone chimney, wooden rafters, and an open forge area ready for interactive gameplay props.",
    software: ["Autodesk Maya", "ZBrush", "Substance 3D"],
    specs: {
      type: "Medieval Shop Architecture",
      textures: "Unique PBR Texture Sets",
      features: "Detailed Forge, Hearth & Canopy"
    },
    artstationUrl: "https://www.artstation.com/artwork/P4Xv18"
  },
  {
    id: "tinkerer-workshop",
    title: "Tinkerer Workshop Level Asset",
    category: "environments",
    categoryLabel: "Environment & Architecture",
    albumId: "3654607",
    isFeatured: false,
    thumbnail: "assets/images/portfolio/tinkerer-workshop.jpg",
    fullImage: "assets/images/portfolio/tinkerer-workshop.jpg",
    shortDesc: "Eclectic workshop building with multiple balconies, attic observation tower, and whimsical medieval fantasy architectural details.",
    fullDesc: "An elaborate multi-level workshop building model for an eccentric inventor or alchemist. Rich in visual storytelling with asymmetric rooflines, dormer windows, and sturdy stone foundations.",
    software: ["Maya", "Substance 3D Painter", "Unreal Engine"],
    specs: {
      type: "Complex Multi-Story Fantasy Building",
      textures: "PBR Weathered Wood & Clay Tiles",
      gameReady: "Optimized Geometry & UVs"
    },
    artstationUrl: "https://www.artstation.com/artwork/q0eGZn"
  },
  {
    id: "medieval-house-3",
    title: "Medieval House 3D Model 3",
    category: "environments",
    categoryLabel: "Environment & Architecture",
    albumId: "3654607",
    isFeatured: false,
    thumbnail: "assets/images/portfolio/medieval-house-3d-model-3.webp",
    fullImage: "assets/images/portfolio/medieval-house-3d-model-3.webp",
    shortDesc: "Classic medieval town house with timber framing, plastered facade, and steep clay tile gabled roof.",
    fullDesc: "A core building block for medieval fantasy towns and villages. Designed with modular proportions to snap together along streets or village squares with zero seam artifacts.",
    software: ["Maya", "Substance 3D", "Unreal Engine"],
    specs: {
      type: "Townhouse Architecture Asset",
      modular: "Grid-Aligned Footprint",
      textures: "PBR Master Materials"
    },
    artstationUrl: "https://www.artstation.com/artwork/vzDq0O"
  },
  {
    id: "medieval-house-2",
    title: "Medieval House 3D Model 2",
    category: "environments",
    categoryLabel: "Environment & Architecture",
    albumId: "3654607",
    isFeatured: false,
    thumbnail: "assets/images/portfolio/medieval-house-3d-model-2.webp",
    fullImage: "assets/images/portfolio/medieval-house-3d-model-2.webp",
    shortDesc: "Sturdy half-timbered medieval dwelling with cobblestone base and overhang second floor.",
    fullDesc: "Authentic historical architectural proportion study. Includes realistic sagging roof beam lines and worn plaster between wooden structural framing.",
    software: ["Maya", "ZBrush", "Substance 3D"],
    specs: {
      type: "Village Residence Asset",
      materials: "Timber, Plaster, Slate Tiles"
    },
    artstationUrl: "https://www.artstation.com/artwork/QxX2V3"
  },
  {
    id: "medieval-house-1",
    title: "Medieval House 3D Model 1",
    category: "environments",
    categoryLabel: "Environment & Architecture",
    albumId: "3654607",
    isFeatured: false,
    thumbnail: "assets/images/portfolio/medieval-house-3d-model-1.webp",
    fullImage: "assets/images/portfolio/medieval-house-3d-model-1.webp",
    shortDesc: "Rustic cottage with wood shingle roof, stone hearth, and handcrafted wooden shutters.",
    fullDesc: "Charming rural dwelling asset crafted for fantasy village environments. High-poly detailing on wood knots and worn stone blocks baked down to optimized game geometry.",
    software: ["Maya", "Substance Painter", "Marmoset"],
    specs: {
      type: "Rural Cottage Asset",
      textures: "4K Baked PBR Maps"
    },
    artstationUrl: "https://www.artstation.com/artwork/0a492y"
  },
  {
    id: "medieval-house-alt",
    title: "Medieval House Exterior",
    category: "environments",
    categoryLabel: "Environment & Architecture",
    albumId: "3654607",
    isFeatured: false,
    thumbnail: "assets/images/portfolio/medieval-house.webp",
    fullImage: "assets/images/portfolio/medieval-house.webp",
    shortDesc: "Detailed exterior render of medieval settlement architecture with realistic lighting and materials.",
    fullDesc: "A complete exterior showcase demonstrating texture fidelity and realistic daylight rendering on weathered medieval structures.",
    software: ["Maya", "Substance Painter", "Unreal Engine"],
    specs: {
      type: "Environment Architecture",
      textures: "PBR Materials"
    },
    artstationUrl: "https://www.artstation.com/artwork/nd0NxK"
  },
  {
    id: "farm-structure-2",
    title: "Farm Structure 3D Model 2",
    category: "environments",
    categoryLabel: "Environment & Architecture",
    albumId: "3654607",
    isFeatured: false,
    thumbnail: "assets/images/portfolio/farm-structure-3d-model-2.webp",
    fullImage: "assets/images/portfolio/farm-structure-3d-model-2.webp",
    shortDesc: "Agricultural barn and granary building with slatted wooden siding and loft storage access.",
    fullDesc: "Game-ready farm barn asset with exterior and open interior space, ideal for tactical cover or exploration in medieval RPGs.",
    software: ["Maya", "Substance 3D", "Unreal Engine 5"],
    specs: {
      type: "Barn & Farm Architecture",
      interiors: "Walkable Interior Floorplan"
    },
    artstationUrl: "https://www.artstation.com/artwork/eglwvw"
  },
  {
    id: "farm-structure-1",
    title: "Farm Structure 3D Model 1",
    category: "environments",
    categoryLabel: "Environment & Architecture",
    albumId: "3654607",
    isFeatured: false,
    thumbnail: "assets/images/portfolio/farm-structure-3d-model-1.webp",
    fullImage: "assets/images/portfolio/farm-structure-3d-model-1.webp",
    shortDesc: "Rural outbuilding with stone foundation, wooden pen fences, and thatched roof textures.",
    fullDesc: "Farm outbuilding model designed to add variety and life to rural game countrysides and farmland biomes.",
    software: ["Maya", "Blender", "Substance 3D"],
    specs: {
      type: "Outbuilding Asset",
      textures: "PBR Tileable Materials"
    },
    artstationUrl: "https://www.artstation.com/artwork/8vbqVG"
  },
  {
    id: "temple",
    title: "Ancient Stone Temple",
    category: "environments",
    categoryLabel: "Environment & Architecture",
    albumId: "3654607",
    isFeatured: true,
    thumbnail: "assets/images/portfolio/temple.jpg",
    fullImage: "assets/images/portfolio/temple.jpg",
    shortDesc: "Atmospheric ancient stone temple ruins with carved pillars, altar steps, and dramatic mood lighting.",
    fullDesc: "Mystical temple environment showcasing weathered carved masonry, moss accumulation, and spiritual altar design for fantasy adventure quest locations.",
    software: ["ZBrush", "Unreal Engine 5", "Substance 3D"],
    specs: {
      type: "Temple & Ruin Architecture",
      sculpt: "Hand-Carved Stone Reliefs"
    },
    artstationUrl: "https://www.artstation.com/artwork/b0l8Rr"
  },
  {
    id: "a-hut",
    title: "Forest Hut Environment Asset",
    category: "environments",
    categoryLabel: "Environment & Architecture",
    albumId: "3654607",
    isFeatured: false,
    thumbnail: "assets/images/portfolio/a-hut.jpg",
    fullImage: "assets/images/portfolio/a-hut.jpg",
    shortDesc: "Quaint timber cabin nestled in woods with stone chimney, porch, and rustic detailing.",
    fullDesc: "A cozy woodland shelter asset designed for forest wilderness zones, hunter camps, or herbalist retreat locations.",
    software: ["Maya", "Blender", "Substance 3D"],
    specs: {
      type: "Woodland Cabin Asset",
      textures: "PBR Rough Timber"
    },
    artstationUrl: "https://www.artstation.com/artwork/Y8B4ZK"
  },
  {
    id: "unreal-render",
    title: "Unreal Engine Real-Time Render",
    category: "unreal",
    categoryLabel: "Unreal Engine & Real-time",
    albumId: "3654607",
    isFeatured: true,
    thumbnail: "assets/images/portfolio/unreal-render.jpg",
    fullImage: "assets/images/portfolio/unreal-render.jpg",
    shortDesc: "Real-time cinematic lighting and environment composition study inside Unreal Engine.",
    fullDesc: "Lighting and atmosphere showcase in Unreal Engine, demonstrating post-processing volume grading, volumetric light shafts, and cinematic camera depth of field.",
    software: ["Unreal Engine 5", "Lumen", "Sequencer"],
    specs: {
      engine: "Unreal Engine 5 Real-Time",
      lighting: "Dynamic Sun & Directional Light Shafts"
    },
    artstationUrl: "https://www.artstation.com/artwork/6NzE2n"
  },
  {
    id: "unreal-shaders",
    title: "Unreal Custom Technical Shaders",
    category: "unreal",
    categoryLabel: "Unreal Engine & Real-time",
    albumId: "3654607",
    isFeatured: false,
    thumbnail: "assets/images/portfolio/unreal-shaders.jpg",
    fullImage: "assets/images/portfolio/unreal-shaders.jpg",
    shortDesc: "Technical material setup exploring dynamic parameter blends, vertex painting, and real-time surface effects in UE5.",
    fullDesc: "Advanced material graph engineering inside Unreal Engine. Demonstrates parameterized master materials, parallax occlusion mapping, and layered blend weights.",
    software: ["Unreal Engine Material Graph", "HLSL"],
    specs: {
      type: "Technical Art & Shaders",
      features: "Material Instances & Vertex Paint Masks"
    },
    artstationUrl: "https://www.artstation.com/artwork/r96Jda"
  },
  {
    id: "3d-environment",
    title: "3D Game Environment Breakdown",
    category: "unreal",
    categoryLabel: "Unreal Engine & Real-time",
    albumId: "3654607",
    isFeatured: false,
    thumbnail: "assets/images/portfolio/3d-environment.jpg",
    fullImage: "assets/images/portfolio/3d-environment.jpg",
    shortDesc: "Comprehensive game environment level breakdown showcasing composition, asset distribution, and mood.",
    fullDesc: "Complete environmental pipeline from blockout to final lighting. Balances gameplay sightlines, navigational landmarks, and artistic atmosphere.",
    software: ["Unreal Engine 5", "Maya", "Substance 3D"],
    specs: {
      type: "Full Environment Level",
      pipeline: "World Building & Set Dressing"
    },
    artstationUrl: "https://www.artstation.com/artwork/OoQAqv"
  },
  {
    id: "knife-combat-anim",
    title: "Knife Combat Action Animation",
    category: "animations",
    categoryLabel: "Animations & Combat",
    albumId: "3654607",
    isFeatured: true,
    thumbnail: "assets/images/portfolio/knife-combat-animation.webp",
    fullImage: "assets/images/portfolio/knife-combat-animation.webp",
    shortDesc: "Visceral close-quarters knife combat animation suite with dynamic weight, stance shifts, and slashing choreography.",
    fullDesc: "Dynamic keyframe combat animations designed for third-person action games. Focuses on impactful anticipation, quick strikes, recovery frames, and root motion accuracy.",
    software: ["Autodesk Maya", "MotionBuilder", "Unreal Engine"],
    specs: {
      type: "Gameplay Combat Animation",
      framerate: "60 FPS Keyframe Motion",
      integration: "UE5 Blendspaces & Root Motion"
    },
    artstationUrl: "https://www.artstation.com/artwork/LaRxXK"
  },
  {
    id: "knife-takedown-anim",
    title: "Stealth Knife Takedown Animation",
    category: "animations",
    categoryLabel: "Animations & Combat",
    albumId: "3654607",
    isFeatured: false,
    thumbnail: "assets/images/portfolio/knife-takedown-animation.jpg",
    fullImage: "assets/images/portfolio/knife-takedown-animation.jpg",
    shortDesc: "Synchronized dual-character stealth assassination and takedown sequence.",
    fullDesc: "Paired character animation featuring attacker and victim interaction with precise bone alignment, struggle momentum, and cinematic camera framing.",
    software: ["Maya", "Unreal Engine Control Rig"],
    specs: {
      type: "Paired Character Execution Animation",
      sync: "Synchronized Root Motion Bones"
    },
    artstationUrl: "https://www.artstation.com/artwork/xdDyPX"
  },
  {
    id: "giant-sword-anim",
    title: "Giant Greatsword Combat Animation",
    category: "animations",
    categoryLabel: "Animations & Combat",
    albumId: "3654607",
    isFeatured: false,
    thumbnail: "assets/images/portfolio/giant-sword-animation.jpg",
    fullImage: "assets/images/portfolio/giant-sword-animation.jpg",
    shortDesc: "Heavy two-handed greatsword swing animation with exaggerated inertia, ground impact, and recovery physics.",
    fullDesc: "Designed for heavyweight action RPG combat (Souls-like genre). Emphasizes physical mass, torso torque, foot planting, and dramatic follow-through recoil.",
    software: ["Maya", "Control Rig", "UE5"],
    specs: {
      type: "Heavy Weapon Action Loop",
      mechanics: "Inertia, Hit Stop & Ground Shake Trigger"
    },
    artstationUrl: "https://www.artstation.com/artwork/XagE5D"
  },
  {
    id: "miles-morales-anim",
    title: "Miles Morales Dynamic Traversal Animation",
    category: "animations",
    categoryLabel: "Animations & Combat",
    albumId: "3654607",
    isFeatured: false,
    thumbnail: "assets/images/portfolio/miles-morales-animation.jpg",
    fullImage: "assets/images/portfolio/miles-morales-animation.jpg",
    shortDesc: "Acrobatic aerial traversal and flip animation study capturing the fluid, expressive body language of Spider-Man.",
    fullDesc: "Expressive aerial acrobatics keyframed in Maya. Captures the iconic loose, improvisational physics and character personality of Miles Morales.",
    software: ["Autodesk Maya", "Keyframe Animation"],
    specs: {
      type: "Aerial Traversal Animation",
      style: "Expressive Keyframe Posing"
    },
    artstationUrl: "https://www.artstation.com/artwork/49lmWk"
  },
  {
    id: "character-anim-suite",
    title: "Character Rigging & Locomotion Suite",
    category: "animations",
    categoryLabel: "Animations & Combat",
    albumId: "3654607",
    isFeatured: false,
    thumbnail: "assets/images/portfolio/character-animation.jpg",
    fullImage: "assets/images/portfolio/character-animation.jpg",
    shortDesc: "Full humanoid character rig test including weight painting, spine twist distribution, and seamless locomotion cycles.",
    fullDesc: "Technical rigging and skinning showcase. Features deformation testing across extreme poses, elbow/knee volume preservation, and smooth walk/run/sprint blendspace loops.",
    software: ["Autodesk Maya", "Rigging Tools", "Skinning"],
    specs: {
      type: "Technical Rigging & Locomotion",
      rig: "IK/FK Bipedal Skeleton with Facial Setup"
    },
    artstationUrl: "https://www.artstation.com/artwork/lRwdvJ"
  }
];
