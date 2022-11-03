const { app, BrowserWindow } = require("electron");

function App() {
  const win = require('./createWindow.js')
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
