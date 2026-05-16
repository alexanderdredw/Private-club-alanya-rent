const fs = require('fs');
const path = require('path');

const root = process.cwd();
const target = path.join(root, 'dist_deploy');

if (!fs.existsSync(target)) {
    console.error('Target dist_deploy does not exist!');
    process.exit(1);
}

function copyRecursiveSync(src, dest) {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
        if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
        fs.readdirSync(src).forEach(childItemName => {
            copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
}

const items = fs.readdirSync(root);
items.forEach(item => {
    // Sync folders containing 'Mah', 'assets', or 'PHOTOS'
    if (item.includes('Mah') || item === 'assets' || item === 'PHOTOS') {
        const fullPath = path.join(root, item);
        if (fs.statSync(fullPath).isDirectory()) {
            console.log(`Syncing folder: ${item}`);
            copyRecursiveSync(fullPath, path.join(target, item));
        }
    }
});

// Also sync the core JS, CSS and index.html to make sure everything is up to date
console.log('Syncing core files...');
copyRecursiveSync(path.join(root, 'js'), path.join(target, 'js'));
copyRecursiveSync(path.join(root, 'css'), path.join(target, 'css'));
fs.copyFileSync(path.join(root, 'index.html'), path.join(target, 'index.html'));

console.log('Done! All images, assets, and index.html have been synced to dist_deploy.');
