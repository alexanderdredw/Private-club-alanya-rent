const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'js', 'data.js');
let content = fs.readFileSync(filePath, 'utf8');

// Regex to match the map link with any URL and text inside pd-maps-link class
// Handles escaped quotes common in the data.js strings
const regex = /<a href=\\"https:\/\/maps\.app\.goo\.gl\/[^"]+\\" target=\\"_blank\\" rel=\\"noopener\\" class=\\"pd-maps-link\\">[^<]+<\/a>/g;

const newContent = content.replace(regex, '');

if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Successfully removed map links from js/data.js');
} else {
    console.log('No map links found or regex did not match.');
}
