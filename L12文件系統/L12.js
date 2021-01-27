// r+ 打開文件用於讀寫。
// w+打開文件用於讀寫，將流定位到文件的開頭。如果文件不存在則創建文件。
// a打開文件用於寫入，將流定位到文件的末尾。如果文件不存在則創建文件。
// a+打開文件用於讀寫，將流定位到文件的末尾。如果文件不存在則創建文件

const fs = require('fs')

fs.open('/Users/joe/test.txt', 'r', (err, fd) => {
  //fd 是文件描述符。
})

// stat()方法，調用時傳入文件的路徑，一旦Node.js 獲得文件的詳細信息，則會調用傳入的回調函數，並帶上兩個參數：錯誤消息和文件屬性，
// const fs = require('fs')
fs.stat('/Users/joe/test.txt', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }
  //可以访问 `stats` 中的文件属性
})

// Node.js 也提供了同步的方法，該方法會阻塞線程，直到文件屬性準備就緒為止：
// const fs = require('fs')
try {
  const stats = fs.statSync('/Users/joe/test.txt')
} catch (err) {
  console.error(err)
}

// 使用stats.isFile()和stats.isDirectory()判斷文件是否目錄或文件。
// 使用stats.isSymbolicLink()判斷文件是否符號鏈接。
// 使用stats.size獲取文件的大小（以字節為單位）。

fs.stat('/Users/joe/test.txt', (err, stats) => {
    if (err) {
      console.error(err)
      return
    }
  
    stats.isFile() //true
    stats.isDirectory() //false
    stats.isSymbolicLink() //false
    stats.size //1024000 //= 1MB
  })