# All Into Art — Game Development & 3D Art Studio Website

Official website for **All Into Art**, a game development company and 3D digital art studio founded by **Haider Shaikh**.

Engineered for seamless, zero-config hosting on **GitHub Pages**, featuring authentic 3D artwork, characters, environments, and animations directly from Haider Shaikh's [ArtStation Album #3654607](https://www.artstation.com/haidershaikh6/albums/3654607).

---

## 🚀 Live Hosting on GitHub Pages (Quick Setup)

Hosting this website on GitHub Pages takes under 2 minutes:

### Step 1: Push Local Code to Your GitHub Repository
Open PowerShell or your terminal in this directory (`f:\Antigravity Website Project`) and run:

```bash
# 1. Add changes and commit
git add .
git commit -m "Update website: authentic ArtStation album 3654607 assets, new cinematic design"

# 2. Add your GitHub remote (replace with your repo URL):
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# 3. Push to main branch
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages in Repository Settings
1. On GitHub, navigate to your repository's **Settings** tab.
2. In the left navigation menu, click **Pages** (under "Code and automation").
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `main` and folder `/ (root)`
4. Click **Save**.
5. Within 60 seconds, your site will be published at:
   ```
   https://<your-username>.github.io/<your-repo-name>/
   ```

*(Optional)* If you configure a custom domain (such as `allintoart.com`), enter it in the **Custom domain** field in the GitHub Pages settings, and add a `CNAME` file containing your domain name in the root folder.

---

## ✨ Features & Visual Design

- **100% Authentic ArtStation Album #3654607 Assets**:
  Directly uses the real production models, characters, environments, and animations from Haider Shaikh's portfolio.
- **Cinematic Obsidian & Warm Amber Studio Aesthetic**:
  Designed with an understated, prestigious AAA game development aesthetic inspired by industry-leading game studios.
- **25 Filterable Project Artworks**:
  - **Characters & Likeness**: Green Lantern John Stewart, Avatar Aang, Billy Butcher likeness sculpts.
  - **Environment & Architecture**: Stylized Windmills, Blacksmith Forge, Medieval Houses, Farm Structures, Tinkerer Workshop, Ancient Temple, Forest Hut.
  - **Unreal Engine 5 Real-Time**: Sci-Fi Futuristic Lobby, Unreal Custom Shaders, Real-Time Environment Breakdowns.
  - **Combat & Traversal Animation**: Knife Combat, Greatsword heavy swings, Stealth assassinations, Miles Morales aerial flips, Rigging & Locomotion suites.
- **Interactive Lightbox Modal**:
  Inspect high-resolution artwork, detailed polycounts, PBR texture formats, and jump directly to each project's page on ArtStation.
- **Studio Capabilities & Production Pipeline**:
  Clear breakdown of 3D Character Art, Modular Kitbashing, Unreal Engine Integration, Animation, and Performance Optimization.
- **Founder Profile**:
  Haider Shaikh profile with authentic ArtStation avatar, biography, Discord handle (`allintoarts`), and direct inquiry contact form.
- **Zero Build Step Dependency**:
  Pure modern HTML5, CSS3, and ES6 JavaScript. No bundlers or npm required.

---

## 📁 Directory Structure

```
Antigravity Website Project/
├── index.html                  # Main website landing page
├── .nojekyll                   # Bypasses Jekyll processing on GitHub Pages
├── README.md                   # Documentation & deployment guide
└── assets/
    ├── css/
    │   └── style.css           # Cinematic dark theme, typography & responsive layouts
    ├── js/
    │   ├── portfolio-data.js   # 25 authentic ArtStation album projects database
    │   └── main.js             # Navigation, filter system, lightbox modal & form logic
    └── images/
        ├── haider-avatar.jpg   # Haider Shaikh's ArtStation avatar
        └── portfolio/          # 25 authentic artwork files from Album #3654607
            ├── green-lantern-john-stewart-3d-character-model.webp
            ├── green-lantern-john-stewart-aaron-pierre-character-model-cinematic.webp
            ├── avatar-the-last-airbender-aang-3d-character-model.webp
            ├── billy-butcher.webp
            ├── sci-fi-futuristic-lobby.webp
            ├── stylized-windmill.webp
            ├── windmill-3d-model.webp
            ├── blacksmith-3d-model.webp
            ├── tinkerer-workshop.jpg
            ├── medieval-house-3d-model-1.webp
            ├── medieval-house-3d-model-2.webp
            ├── medieval-house-3d-model-3.webp
            ├── medieval-house.webp
            ├── farm-structure-3d-model-1.webp
            ├── farm-structure-3d-model-2.webp
            ├── temple.jpg
            ├── a-hut.jpg
            ├── unreal-render.jpg
            ├── unreal-shaders.jpg
            ├── 3d-environment.jpg
            ├── knife-combat-animation.webp
            ├── knife-takedown-animation.jpg
            ├── giant-sword-animation.jpg
            ├── miles-morales-animation.jpg
            └── character-animation.jpg
```

---

## 👤 Credits

- **Studio**: All Into Art
- **Founder & Lead 3D Artist**: Haider Shaikh
- **ArtStation Portfolio**: [haidershaikh6.artstation.com](https://haidershaikh6.artstation.com/)
- **Featured ArtStation Album**: [Album #3654607](https://www.artstation.com/haidershaikh6/albums/3654607)
- **Discord**: `allintoarts`
