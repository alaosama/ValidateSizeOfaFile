async function readFile() {
    try {
        const fileHandle = await window.showOpenFilePicker();
        const file = await fileHandle[0].getFile();
        const fileContents = await file.text();
        document.getElementById('fileContent').innerText = fileContents;
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

async function writeFile() {
    try {
        const fileHandle = await window.showSaveFilePicker();
        const writable = await fileHandle.createWritable();
        await writable.write('Hello, World!');
        await writable.close();
        console.log('File has been written successfully!');
    } catch (error) {
        console.error('Error writing file:', error);
    }
}

