const fs = require('fs');
['js/data.js', 'dist_deploy/js/data.js'].forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        content = content.replace(/"videoDir":\s*"8_Mah_V",\s*"video":\s*"Apt_8_Video\.mp4"/, '"videoDir": "8_Mah_V",\n    "video": "https://youtube.com/shorts/0OCe0EJxQ5c"');
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated', file);
    }
});
