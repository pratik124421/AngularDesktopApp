const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    print: (data) => ipcRenderer.send('print', data),
    startprint:(data) => ipcRenderer.send('startprint', data),
})