const path = require('path')
const {app, BrowserWindow} = require('electron')




  function createWindow () {
    const windowOptions = {
      width: 450,
      maxWidth: 450,
      height: 450,
      title: "SAMBIT",
      frame: false
    }
    mainWindow = new BrowserWindow(windowOptions)
    mainWindow.loadURL(path.join('file://', __dirname, '/index.html'))
    

  }

  app.on('ready', () => {
    createWindow()
  })

