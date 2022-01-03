const { exec } = require("child_process");
const { app, BrowserWindow, shell } = require("electron");

let win;
const createWindow = () => {
  if (process.env.NODE_ENV === "dev") {
    shell.openPath(__dirname + "/python/dist/calculatorDeamon.app");
  } else {
    shell.openPath(
      __dirname.replace(
        "Resources/app.asar",
        "python/dist/calculatorDeamon.app"
      )
    );
  }
  win = new BrowserWindow({
    width: 450,
    height: 850,

    resizable: true,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    },
  });
  win.loadFile(__dirname + "/html/calculator.html");
};
app.whenReady().then(createWindow);
app.on("window-all-closed", () => {
  if (process.platform === "darwin") {
    app.quit();
  }
});

app.on("before-quit", () => {
  exec("killall calculatorDeamon");
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
