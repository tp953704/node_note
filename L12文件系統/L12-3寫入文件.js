const fs = require('fs')

const content = '一些内容'
// 在Node.js中寫入文件最簡單的方式是使用fs.writeFile()API。
fs.writeFile('/Users/joe/test.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //文件写入成功。
})

// 另外，也可以使用同步的版本fs.writeFileSync()：

try {
  const data = fs.writeFileSync('/Users/joe/test.txt', content)
  //文件写入成功。
} catch (err) {
  console.error(err)
}


// API 會替換文件的內容（如果文件已經存在）。

// 可以通過指定標誌來修改默認的行為：
fs.writeFile('/Users/joe/test.txt', content, { flag: 'a+' }, err => {})
/*
可能會使用的標誌有：

r+ 打開文件用於讀寫。
w+打開文件用於讀寫，將流定位到文件的開頭。如果文件不存在則創建文件。
a打開文件用於寫入，將流定位到文件的末尾。如果文件不存在則創建文件。
a+打開文件用於讀寫，將流定位到文件的末尾。如果文件不存在則創建文件。
*/ 

// 追加到文件
const content = '一些内容'

fs.appendFile('file.log', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //完成！
})