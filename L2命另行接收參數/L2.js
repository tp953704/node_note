const minimst = require('minimist');
const params = process.argv;

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
  })


// process.argv 該屬性是一個包含所有命令行調用參數的數組。
// 第一個參數是node命令的完整路徑。
// 第二個參數是正被執行的文件的完整路徑。
// 所有其他的參數從第三個位置開始。

// 可以使用循環迭代所有的參數（包括node 路徑和文件路徑）

const args = require('minimist')(process.argv.slice(2));

console.log(args)
console.log(args['name'])
