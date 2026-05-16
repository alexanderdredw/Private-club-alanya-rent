const fs = require('fs');

const files = ['js/app.js', 'dist_deploy/js/app.js'];

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');

    // 1. Replace the ytContainer
    const oldContainerRegex = /\/\/ YouTube Player Container[\s\S]*?(?=} else \{)/;
    const newContainer = `// YouTube Player Container
            videoContainerStr = \`
                <div id="media-video" class="media-container cinematic-video-container custom-player yt-mode">
                    <div class="yt-background-glow"></div>
                    <div id="yt-player-container" class="cinematic-main-video" style="pointer-events: auto; width: 100%; height: 100%;">
                        <div id="yt-player" style="width: 100%; height: 100%;"></div>
                    </div>
                </div>
            \`;
        `;
    content = content.replace(oldContainerRegex, newContainer);

    // 2. Change controls: 0 to controls: 1 in YT.Player
    const ytPlayerRegex = /'controls':\s*0,/;
    content = content.replace(ytPlayerRegex, "'controls': 1,");

    fs.writeFileSync(file, content, 'utf8');
    console.log("Updated", file);
});
