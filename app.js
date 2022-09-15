// Core Module
// File System

const fs = require('fs')

// menuliskan string ke file (synchronous)
try {
    fs.writeFileSync('test.txt', 'Hello World secara synchronous!')
} catch (e) {
    console.log(e)
}

// menuliskan string ke file (Asynchronous)
fs.writeFile('');
