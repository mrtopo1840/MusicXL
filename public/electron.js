const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const isDev = require("electron-is-dev");

// Declaracion de la pagina principal
let mainWindow;

/*
  Funcion de creacion de la pagina principal
  donde se declaran las propiedades de la app
  y con webPreferences para evitar errores de seguridad.
*/
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 900,
    webPreferences: {
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
    },
  });
  //Se carga la pagina web en la aplicacion de escritorio.
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

//Opcion que cuando se cerre la app, deje de ejecutar la app
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
