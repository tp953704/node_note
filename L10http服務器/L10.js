const http = require('http')

const port = 3000

const server = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('你好世界\n')
})

server.listen(port, () => {
    console.log(__dirname)
    console.log(`服务器运行在 http://hostname:${port}/`)
})

