const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\\\Users\\\\Александр\\\\OneDrive\\\\Рабочий стол\\\\alanya rent website';
const distDir = path.join(rootDir, 'dist');

// Folders to sync (source in root, dest in dist)
const folders = fs.readdirSync(rootDir).filter(f => f.toLowerCase().includes('mah') && (f.toLowerCase().includes('v') || fs.statSync(path.join(rootDir, f)).isDirectory()));

folders.forEach(folder => {
    const src = path.join(rootDir, folder);
    const dest = path.join(distDir, folder);
    
    if (fs.statSync(src).isDirectory()) {
        console.log(`Checking folder: ${folder}`);
        const files = fs.readdirSync(src);
        const videoFile = files.find(f => f.endsWith('.mp4') || f.endsWith('.mov'));
        
        if (videoFile) {
            console.log(`  Found video: ${videoFile}`);
            if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
            fs.copyFileSync(path.join(src, videoFile), path.join(dest, videoFile));
            console.log(`  Copied to dist/${folder}/${videoFile}`);
        }
    }
});
