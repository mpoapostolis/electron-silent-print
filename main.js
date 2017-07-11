const http = require('http');
const os = require('os');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { app, BrowserWindow } = require('electron');

const server = http.createServer((req, res) => {
  if (req.method == 'POST') {
    let body = '';
    req.on('data', data => {
      console.log(JSON.parse(data));
      fs.writeFile(path.join(os.tmpdir(), 'data.pdf'), data, err => console.log(err));
      exec(`gs.exe ${path.join(os.tmpdir(), 'data.pdf')}`)
    });
  }
  res.end();
});

server.listen(8000);

let mainWindow;
const createWindow = () => {
  mainWindow = new BrowserWindow({ resizable: false, frame: false, width: 10, height: 10, x: -10, y: -250 });
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', createWindow);

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
