const { app, BrowserWindow } = require("electron");
const controlWindow = require("./ControlWindow.js");

function App() {
  const win = require("./createWindow.js");
  const tray = require("./Tray.js");

  const { toggle } = controlWindow(win, tray);

  tray.on("click", toggle);
}

app.whenReady().then(App);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
