
export default {
  doTest () {

  },
  doLogin () {
    // 与background通信
    require('electron').ipcRenderer.send('doLogin')
  }
}
