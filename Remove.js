const fs = require('fs');
const path = require('path');

function removeLogs() {
    const logDir = path.join(__dirname, 'Logs');

    if (fs.existsSync(logDir)) {
        const files = fs.readdirSync(logDir);
        files.forEach(file => {
            console.log(`Deleting file: ${file}`);
            fs.unlinkSync(path.join(logDir, file));  // Remove files
        });
        fs.rmdirSync(logDir);  // Remove directory
        console.log('Logs directory deleted.');
    } else {
        console.log('Logs directory does not exist.');
    }
}

removeLogs();
