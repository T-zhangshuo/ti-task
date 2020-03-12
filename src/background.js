'use strict'
import { app, protocol, BrowserWindow, Menu } from 'electron'
import {
  createProtocol
} from 'vue-cli-plugin-electron-builder/lib'

const isDevelopment = process.env.NODE_ENV !== 'production'
protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { secure: true, standard: true } }])

// 常量配置地址
const mainUrl = process.env.WEBPACK_DEV_SERVER_URL ? process.env.WEBPACK_DEV_SERVER_URL : 'app://./index.html'
const loginUrl = mainUrl + '/#/login'

// APP生命周期
app.on('window-all-closed', () => {
  if (isMacOs()) {
    app.quit()
  }
  mainWin = null
  loginWin = null
})

app.on('activate', () => {

})

app.on('ready', async () => {
  showMainWindow()
})

if (isDevelopment) {
  if (isMacOs()) {
    process.on('SIGTERM', () => {
      app.quit()
    })
  } else {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  }
}

// 创建window相关的程序
let mainWin
let loginWin

// 显示登陆窗口
function showLoginWindow () {
  if (loginWin != null) return
  loginWin = new BrowserWindow({
    width: 400,
    height: 500,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true,
      backgroundThrottling: false
    },
    titleBarStyle: 'hidden',
    transparent: true,
    center: true
  })
  // 打开devTool
  openDevTool(loginWin)
  // 监听关闭事件
  loginWin.on('closed', () => {
    loginWin = null
    mainWin.show()
  })
  loginWin.loadURL(loginUrl)
  // 如果主窗口显示则隐藏
  if (mainWin != null && mainWin.isVisible()) {
    mainWin.hide()
  }
}

// 显示主窗口
function showMainWindow () {
  if (mainWin != null) return
  mainWin = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true,
      backgroundThrottling: false
    },
    titleBarStyle: 'hidden',
    transparent: true,
    center: true
  })
  // 打开devTool
  openDevTool(mainWin)
  mainWin.loadURL(mainUrl)
  mainWin.on('closed', () => {
    mainWin = null
  })
  // 创建菜单
  createMenu()
}

// 创建菜单
function createMenu () {
  if (process.platform === 'darwin') {
    const template = [
      {
        label: 'Ti-Task',
        submenu: [
          {
            role: 'about',
            label: '关于'
          },
          {
            role: 'quit',
            label: '退出'
          }
        ]
      }
    ]
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
  } else {
    // windows及linux系统
    Menu.setApplicationMenu(null)
  }
}

function openDevTool (win) {
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // 如果为开发者模式,则打开调试模式
    win.webContents.openDevTools()
  } else {
    createProtocol('app')
  }
}

// IPC通信
const ipc = require('electron').ipcMain
ipc.on('doLogin', () => {
  showLoginWindow()
})

/** * 以下为工具方法 **/
// 判断是否为mac os
function isMacOs () {
  return process.platform !== 'darwin'
}
