const os = require('os');
// 返回標識底層架構的字符串，例如arm、x64、arm64。
// console.log(os.arch())

os.cpus()
// 返回系統上可用信息
// console.log(os.cpus())

os.endianness()
// 根據是使用大端序或小端序編譯Node.js，返回BE或LE。
// console.log(os.endianness)

os.freemem()
// 返回代表系統中可用內存的字節數。
// console.log(os.freemem())

os.homedir()
// 返回到當前用戶的主目錄的路徑。
// console.log(os.homedir())

os.hostname()
// 返回主機名。
// console.log(os.hostname())

os.networkInterfaces()
// 返回系統上可用的網絡接口的詳細信息。
// console.log(os.networkInterfaces())

os.loadavg()
// 返回操作系統對平均負載的計算。
// 這僅在Linux 和macOS 上返回有意義的值。
// console.log(os.loadavg())

os.platform()
// 返回node編譯平台
console.log(os.platform())

os.release()
// 返回標識操作系統版本號的字符串。
console.log(os.release())

os.tmpdir()
// 返回臨時文件夾
console.log(os.tmpdir())

os.totalmem()
// 返回表示系統中可用的總內存的字節數。
console.log(os.totalmem())

os.type()
// 標識操作系統：

// Linux
// macOS 上為Darwin
// Windows 上為 Windows_NT
console.log(os.type())

os.uptime()
// 返回自上次重新啟動以來計算機持續運行的秒數。
console.log(os.uptime())

os.userInfo()
// 返回包含當前username、uid、gid、shell和homedir的對象。
console.log(os.userInfo())