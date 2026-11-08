const {contextBridge,ipcRenderer}=require('electron');
contextBridge.exposeInMainWorld('desktop',{loadSettings:()=>ipcRenderer.invoke('settings:load'),saveSettings:s=>ipcRenderer.invoke('settings:save',s),loadData:()=>ipcRenderer.invoke('data:load'),readDatabaseFolder:p=>ipcRenderer.invoke('database:read-folder',p),saveData:d=>ipcRenderer.invoke('data:save',d),chooseDatabaseFolder:()=>ipcRenderer.invoke('database:choose'),chooseFolder:()=>ipcRenderer.invoke('folder:choose'),saveMedia:m=>ipcRenderer.invoke('media:save',m),openMedia:p=>ipcRenderer.invoke('media:open',p)});

