const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setImmediate(() => {
    //运行一些东西
    console.log('运行一些东西')
  })
  setTimeout(bar, 0)
  process.nextTick(() => {
    //做些事情
    console.log('//做些事情')
  })
 
  new Promise((resolve, reject) =>
    resolve('应该在 baz 之后、bar 之前')
  ).then(resolve => console.log(resolve))
  baz()
}

foo()


// process.nextTick()的函數會在事件循環的當前迭代中（當前操作結束之後）被執行它會始終在setTimeout和setImmediate之前執行。

// setImmediate() 執行順序取決於各種因素，但是它們都會在事件循環的下一個迭代中運行。