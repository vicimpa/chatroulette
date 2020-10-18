const {app, BrowserWindow, Menu} = require('electron')
const { join  } = require('path')

let mainWindow = null

const dev = process.argv.indexOf('--dev') != -1

if(process.platform == 'linux') {
  app.disableHardwareAcceleration()
  app.commandLine.appendSwitch("disable-software-rasterizer")
}

function initialize () {
  makeSingleInstance()

  function createWindow () {
    const windowOptions = {
      width: 1080,
      minWidth: 680,
      title: 'Chatrullete (Plus)',
      height: 840,
      webPreferences: {
        webSecurity: false,
        preload: join(__dirname, 'dist/preload.js')
      }
    }

    mainWindow = new BrowserWindow(windowOptions)
    mainWindow.loadURL('https://videochatru.com/embed/')

    if(dev)
      mainWindow.webContents.openDevTools()

    mainWindow.on('closed', () => {
      mainWindow = null
    })
  }

  app.on('ready', () => {
    createWindow()
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    if (mainWindow === null) {
      createWindow()
    }
  })
}

function makeSingleInstance () {
  if (process.mas) return

  app.requestSingleInstanceLock()

  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })
}

initialize()