const fs = require('fs');
['js/data.js', 'dist_deploy/js/data.js'].forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        content = content.replace(/"videoDir":\s*"4_Mah_V",\s*"video":\s*"Apt_4_Video\.mp4"/, '"videoDir": "4_Mah_V",\n    "video": "https://youtube.com/shorts/TDZiEZoJ2V0"');
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated', file);
    }
});
