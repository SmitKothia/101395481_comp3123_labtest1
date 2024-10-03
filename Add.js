const fs = require('fs');
const path = require('path');

function createLogs() {
    const logDir = path.join(__dirname, 'Logs');

    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);  // Create directory if not exists
        console.log('Logs directory created.');
    }

    process.chdir(logDir);  // Change to Logs directory

    for (let i = 1; i <= 10; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `This is log file number ${i}`);  // Create files
        console.log(`File created: ${fileName}`);
    }
}

createLogs();
