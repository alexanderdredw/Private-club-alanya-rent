const fs = require('fs');
const path = require('path');

const dir = 'c:\\\\Users\\\\Александр\\\\OneDrive\\\\Рабочий стол\\\\alanya rent website\\\\js';
let datajs = fs.readFileSync(path.join(dir, 'data.js'), 'utf8');
let newAppts = fs.readFileSync('c:\\\\Users\\\\Александр\\\\OneDrive\\\\Рабочий стол\\\\alanya rent website\\\\new_appts.js', 'utf8');

datajs = datajs.replace(/}\\s*\\];\\s*$/, '}');
datajs += newAppts + '\\n];\\n';
fs.writeFileSync(path.join(dir, 'data.js'), datajs);
console.log('injected');
