const fs = require('fs');
['js/data.js', 'dist_deploy/js/data.js'].forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        content = content.replace(/"video":\s*"https:\/\/youtube\.com\/shorts\/TDZiEZoJ2V0"/g, '"video": "https://youtube.com/shorts/5FR3YKwsQL8"');
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated', file);
    }
});
