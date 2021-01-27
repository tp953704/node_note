const fs = require('fs')
const path = require('path')
console.log(__dirname)
const url = path.join(__dirname,'L12.js');
console.log(url)

// 檢查文件夾是否存在
// 使用fs.access()檢查文件夾是否存在以及Node.js是否具有訪問權限。
fs.access('url' ,function(err){
    console.log(err)
})

// 使用fs.mkdir()或fs.mkdirSync()可以創建新的文件夾。

// 讀取目錄的內容
// 使用fs.readdir()或fs.readdirSync()可以讀取目錄的內容。

// 重命名文件夾
// fs.rename()或fs.renameSync()

// 刪除文件夾
// 使用fs.rmdir()或fs.rmdirSync()

