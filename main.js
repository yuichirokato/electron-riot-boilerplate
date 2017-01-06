const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {

  mainWindow = new BrowserWindow({width: 1200, height: 1200});

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.on('closed', () => { mainWindow = null; });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.guit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
