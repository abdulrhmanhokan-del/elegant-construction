# Gallery Update Guide — Elegant Construction Inc.

How to add new images or videos to the website gallery page.

---

## Quick Steps (TL;DR)

1. Add your image/video file to the `gallery/` folder
2. Commit and push to GitHub
3. The GitHub Action automatically updates the gallery — **done!**

---

## Detailed Instructions

### Step 1 — Prepare Your Image or Video

**Supported file formats:**

| Type   | Formats                              |
|--------|--------------------------------------|
| Images | `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.svg` |
| Videos | `.mp4`, `.webm`, `.mov`              |

**File naming tips:**
- Use descriptive names with **hyphens** or **underscores** (no spaces)
- The filename becomes the gallery title automatically
- Example: `luxury-home-irvine.jpg` → displayed as **"Luxury Home Irvine"**
- Example: `office_remodel_2026.png` → displayed as **"Office Remodel 2026"**

### Step 2 — Add the File to the `gallery/` Folder

**Option A — Via GitHub Web UI (easiest):**
1. Go to your repository: https://github.com/abdulrhmanhokan-del/elegant-construction
2. Navigate to the `gallery/` folder
3. Click **"Add file"** → **"Upload files"**
4. Drag and drop your images/videos
5. Click **"Commit changes"**

**Option B — Via Git on your computer:**
```bash
# Copy your image into the gallery folder
cp your-new-photo.jpg gallery/

# Stage, commit, and push
git add gallery/your-new-photo.jpg
git commit -m "Add new gallery photo: your-new-photo.jpg"
git push
```

### Step 3 — Automatic Update

After pushing, the **GitHub Actions workflow** (`update-gallery.yml`) runs automatically:
- It scans the `gallery/` folder for all media files
- It regenerates `gallery-data.js` with the updated file list
- It commits and pushes the updated `gallery-data.js` back to the repo
- The website gallery page reflects the new images on the next page load

> **Note:** You do NOT need to manually edit `gallery-data.js` or `gallery.json`. The automation handles everything.

---

## How It Works (Under the Hood)

```
gallery/
├── luxury-home-irvine.jpg      ← You add files here
├── office-remodel.png
├── site-walkthrough.mp4
└── ...

  ↓  GitHub Action triggers on push to gallery/

gallery-data.js                  ← Auto-generated file
  → Contains the GALLERY_DATA array used by gallery.js
  → Each entry has: file path, title, and type (image/video)

gallery.html + gallery.js        ← Reads gallery-data.js
  → Renders the grid, filters, and lightbox automatically
```

---

## Removing an Image

1. Delete the file from the `gallery/` folder
2. Commit and push
3. The GitHub Action will regenerate `gallery-data.js` without that file

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Image not showing | Check that the file is in the `gallery/` folder (not `images/`) |
| Wrong title | Rename the file — the title is derived from the filename |
| Action didn't run | Go to **Actions** tab on GitHub and manually trigger the workflow |
| Video won't play | Ensure the format is `.mp4`, `.webm`, or `.mov` |

---

## Manual Workflow Trigger

If the automation didn't run, you can trigger it manually:
1. Go to your repo on GitHub
2. Click the **"Actions"** tab
3. Select **"Update Gallery Manifest"** workflow
4. Click **"Run workflow"** → **"Run workflow"**
