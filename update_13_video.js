const fs = require('fs');
['js/data.js', 'dist_deploy/js/data.js'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/("videoDir":\s*"13_Mah_V",\s*"video":\s*)"Apt_13_Video\.mp4"/, '$1"https://www.youtube.com/shorts/cLb_lZxHuhk"');
  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated ' + file);
});
