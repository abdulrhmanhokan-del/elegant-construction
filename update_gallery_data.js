const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, 'gallery');
const files = fs.readdirSync(galleryDir);

const galleryImages = [];

for (const file of files) {
  if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg')) {
    let title = file
      .replace(/\.(jpg|png|jpeg)$/i, '')
      .replace(/_/g, ' ');
    
    // Some basic formatting
    if (title.length > 0) {
      galleryImages.push({
        file: `gallery/${file}`,
        title: title,
        type: 'image'
      });
    }
  } else if (file.endsWith('.mp4')) {
    let title = file
      .replace(/\.mp4$/i, '')
      .replace(/-/g, ' ');
    // capitalize words
    title = title.replace(/\b\w/g, l => l.toUpperCase());
    
    galleryImages.push({
      file: `gallery/${file}`,
      title: title,
      type: 'video'
    });
  }
}

const jsData = `/* Gallery Data — Auto-generated */
const GALLERY_DATA = ${JSON.stringify(galleryImages, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'gallery-data.js'), jsData);
fs.writeFileSync(path.join(__dirname, 'gallery.json'), JSON.stringify(galleryImages, null, 2));

console.log(`Updated gallery-data.js and gallery.json with ${galleryImages.length} items`);
