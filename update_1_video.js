const fs = require('fs');
['js/data.js', 'dist_deploy/js/data.js'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/("videoDir":\s*"1_Mah_V",\s*"video":\s*)"Apt_1_Video\.mp4"/, '$1"https://youtube.com/shorts/zlbCPtw6Ryg"');
  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated ' + file);
});
