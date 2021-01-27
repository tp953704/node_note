const fs = require('fs')
const path = require('path')
fs.readFile(path.join(__dirname, 'L12.js'), 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
  })


//   ，也可以使用同步的版本fs.readFileSync()：
  
  try {
    const data = fs.readFileSync('/Users/joe/test.txt', 'utf8')
    console.log(data)
  } catch (err) {
    console.error(err)
  }