const electron = require('electron');
const url = require('url');
const path = require('path');


const {app, BrowserWindow} = electron;

let mainWindow;

// Listen for app to be ready
app.on('ready', function() {
mainWindow = new BrowserWindow({});
//Load the HTML file into the window
mainWindow.loadURL(url.format({
  pathname: path.join(__dirname, 'mainWindow.html'),
  protocol: 'file:',
  slashes: true
  }));
});
