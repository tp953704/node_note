// http://nodejs.cn/learn/the-nodejs-http-module

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('你好')
})
app.get('/api', (req, res) => {
    res.send('你好')
    process.kill(process.pid, 'SIGTERM')
})
app.listen(3000, () => {
    console.log('服务器已就绪')
    // process.exit(1)
})

//   可用process.exit(1) 關閉進程，任何當前等待中或運行中的請求都會被中止。這不太友好。
//  有時命令發送SIGTERM 信號，並使用進程的信號處理程序進行處理：
// 監聽SIGTERM 信號
process.on('SIGTERM', () => {
    console.log('进程已终止')
    server.close(() => {
      console.log('进程已终止')
    })
  })
//   觸發
// process.kill(process.pid, 'SIGTERM')
