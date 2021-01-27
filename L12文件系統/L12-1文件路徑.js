const path = require('path')
// dirname: 獲取文件的父文件夾。
// basename: 獲取文件名部分。
// extname: 獲取文件的擴展名。
const notes = '/users/joe/notes.txt'

path.dirname(notes) // /users/joe
path.basename(notes) // notes.txt
path.extname(notes) // .txt
// 可以通過為basename指定第二個參數來獲取不帶擴展名的文件名：
path.basename(notes, path.extname(notes)) //notes

const name = 'joe'
// path.join()連接路徑的兩個或多個片段：
path.join('/', 'users', name, 'notes.txt')
console.log(path.join('/', 'users', name, 'notes.txt'))

// 可以使用path.resolve()獲得相對路徑的絕對路徑計算：

console.log(path.resolve('joe.txt'))

console.log(__dirname)
console.log(__filename)
