// 清空控制台
// console.clear() 會清除控制台（其行為可能取決於所使用的控制台）。
console.log(1)
console.log(2)

console.clear()
// 元素計數
// console.count() 是一個便利的方法。
console.count(
    'x 的值为 ' + 1 + ' 且已经检查了几次？'
  )
  console.count(
    'x 的值为 ' + 1 + ' 且已经检查了几次？'
  )
//   打印堆棧踪跡
const function2 = () => console.trace()
const function1 = () => function2()
function1()

// 計算耗時 time() , timeEnd()
const doSomething = () => console.log('测试')
const measureDoingSomething = () => {
  console.time('doSomething()')
  //做点事，并测量所需的时间。
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()

// stdout 和stderr
// console.log非常適合在控制台中打印消息。這就是所謂的標準輸出（或稱為stdout）。

// console.error會打印到stderr流。
// 它不會出現在控制台中，但是會出現在錯誤日誌中。
console.error('error')

// 為輸出著色
console.log('\x1b[33m%s\x1b[0m', '你好')

// 為輸出著色庫，除了為其著色外，它還有助於其他樣式的設置（例如使文本變為粗體、斜體或帶下劃線，
const chalk = require('chalk')
console.log(chalk.yellow('你好'))

// 創建進度條
const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)