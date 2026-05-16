const fs = require('fs');

const files = ['js/app.js', 'dist_deploy/js/app.js'];
const searchStr = `<button class="center-play-btn" onclick="window.toggleMainVideo(event)">
                            <svg class="play-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"></path></svg>
                            <svg class="pause-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>
                        </button>`;

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    // Replace all occurrences
    content = content.split(searchStr).join('');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Removed from ' + file);
  }
});
