/*
流是为 Node.js 应用程序提供动力的基本概念之一。

它们是一种以高效的方式处理读/写文件、网络通信、或任何类型的端到端的信息交换。

流不是 Node.js 特有的概念。 它们是几十年前在 Unix 操作系统中引入的，程序可以通过管道运算符（|）对流进行相互交互。

例如，在传统的方式中，当告诉程序读取文件时，这会将文件从头到尾读入内存，然后进行处理。

使用流，则可以逐个片段地读取并处理（而无需全部保存在内存中）。
*/ 


// Node API 流
/*
process.stdin 返回连接到 stdin 的流。
process.stdout 返回连接到 stdout 的流。
process.stderr 返回连接到 stderr 的流。
fs.createReadStream() 创建文件的可读流。
fs.createWriteStream() 创建到文件的可写流。
net.connect() 启动基于流的连接。
http.request() 返回 http.ClientRequest 类的实例，该实例是可写流。
zlib.createGzip() 使用 gzip（压缩算法）将数据压缩到流中。
zlib.createGunzip() 解压缩 gzip 流。
zlib.createDeflate() 使用 deflate（压缩算法）将数据压缩到流中。
zlib.createInflate() 解压缩 deflate 流。
*/ 


// 不同類型的流
/*
Readable: 可以通过管道读取、但不能通过管道写入的流（可以接收数据，但不能向其发送数据）。 当推送数据到可读流中时，会对其进行缓冲，直到使用者开始读取数据为止。
Writable: 可以通过管道写入、但不能通过管道读取的流（可以发送数据，但不能从中接收数据）。
Duplex: 可以通过管道写入和读取的流，基本上相对于是可读流和可写流的组合。
Transform: 类似于双工流、但其输出是其输入的转换的转换流。
*/ 

// 可讀流應用
const Stream = require('stream')
// const readableStream = new Stream.Readable()
// readableStream._read = () => {}

// 也可以使用 read 选项实现 _read：
const readableStream = new Stream.Readable({
    read() {
        
    }
})


const writableStream = new Stream.Writable()
writableStream._write = (chunk, encoding, next) => {
    console.log(chunk.toString())
    next()
}

process.stdin.pipe(writableStream)

readableStream.push('hi!')
// readableStream.push('ho!')

// 可读流中获取数据
readableStream.on('readable', () => {
    console.log(readableStream.read())
})

// 如何发送数据到可写流
writableStream.write('hey!\n')

// 使用信号通知已结束写入的可写流
writableStream.end()