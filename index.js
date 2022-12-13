const path = require("path");
const url = require("url");
const { app, BrowserWindow } = require("electron");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 500,
    height: 400,
    icon: __dirname + "/img/favicon.jpg",
  });

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true,
    })
  );
  // win.webContents.openDevTools();

  win.on("close", () => {
    win = null;
  });

  win.on("hi", () => {
    win = console.log("hi")
    
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  app.quit();
});
