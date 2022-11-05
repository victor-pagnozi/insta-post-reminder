const { BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 250,
    height: 310,
    frame: false,
    show: false,
    resizable: false,
    fullscreenable: false,
  });

  win.loadFile("index.html");

  win.on("blur", () => win.hide());

  return win;
}

module.exports = createWindow();
