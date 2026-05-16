const fs = require('fs');
['js/data.js', 'dist_deploy/js/data.js'].forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        content = content.replace(/"videoDir":\s*"15_Mah_v",\s*"video":\s*"Apt_15_Video\.mp4"/, '"videoDir": "15_Mah_v",\n    "video": "https://youtube.com/shorts/p-WtNxANyRs"');
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated', file);
    }
});
