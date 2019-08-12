// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { remote } = require('electron')
const Tray = remote.Tray;
const Menu = remote.Menu;
const { resolve } = require('path')
let tray = new Tray(resolve(__dirname, './tray_icon/tray_iconTemplate.png'))
const contextMenu = Menu.buildFromTemplate([

  {
    label: 'show main window', type: 'normal', click: () => {
      mainWindow.show();
    }
  }
])
tray.setContextMenu(contextMenu)
tray.setToolTip('This is my application.')