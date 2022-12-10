const {app,BrowserWindow,ipcMain} = require("electron")
const path = require("path")
var win 
function createWindow() {
    // Create the browser window
    win = new BrowserWindow({
        width:800,
        height:600,
        webPreferences: 
        { 
            preload:path.join(__dirname,"preload.js"),
            nodeIntegration: true, 
            contextIsolation: true,
            enableRemoteModule: true        
        }
    })
    // Load the index.html of the app.
    win.loadFile('dist/my-first-app/index.html')

    win.webContents.openDevTools()

}

app.whenReady().then(()=>{
    createWindow()


    ipcMain.on('print',async (event,data)=>{
        console.log("url:: ",data)
        workerWindow = new BrowserWindow({
            width:800,
            height:600,
            webPreferences: 
            { 
                preload:path.join(__dirname,"preload.js"),
                nodeIntegration: true, 
                contextIsolation: true,
                enableRemoteModule: true        
            }
        });
        await workerWindow.loadURL(data);

        // workerWindow.loadFile("./worker.html");
        // workerWindow.hide();
        // workerWindow.webContents.openDevTools();
        // workerWindow.on("closed", () => {
        //     workerWindow = undefined;
        // });

        var options = {
            silent: true,
            printBackground: true,
            color: false,
            margin: {
            marginType: 'printableArea'
            },
            landscape: false,
            pagesPerSheet: 1,
            collate: false,
            copies: 1,
            header: 'Header of the Page',
            footer: 'Footer of the Page'
        }
        console.log("file entire loaded...")

            workerWindow.webContents.print(options, (success, failureReason) => {
                if (!success) console.log(failureReason);

                console.log('Print Initiated');
            });


        // let win = BrowserWindow.getFocusedWindow();
	    // let win = BrowserWindow.getAllWindows()[1];

       

    })


    ipcMain.on('startprint',async (event,data)=>{
        var options = {
            silent: true,
            printBackground: true,
            color: false,
            margin: {
            marginType: 'printableArea'
            },
            landscape: false,
            pagesPerSheet: 1,
            collate: false,
            copies: 1,
            header: 'Header of the Page',
            footer: 'Footer of the Page'
        }
        console.log("file entire loaded...")

            workerWindow.webContents.print(options, (success, failureReason) => {
                if (!success) console.log(failureReason);

                console.log('Print Initiated');
            });

    })


    app.on('activate',()=>{
        console.log(window.electronAPI)

        if(BrowserWindow.getAllWindows()){
            createWindow()
        }
    })

})

app.on('window-all-closed',()=>{
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

