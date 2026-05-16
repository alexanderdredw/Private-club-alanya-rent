const fs = require('fs');
['js/data.js', 'dist_deploy/js/data.js'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/("videoDir":\s*"14_mah_v",\s*"video":\s*)"Apt_14_Video\.mp4"/i, '$1"https://youtube.com/shorts/YgcKx1GhZ7s"');
  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated ' + file);
});
