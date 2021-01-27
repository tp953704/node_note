// const readline = require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// readline.question(`name?`,(name)=>{
//     console.log(`您好 ${name}`)
//     readline.close()
//     // readline.question(`age?`,(name)=>{
//     //     console.log(`您好 ${name}`)
//     //     readline.close()
//     // })
// })
// readline 還提供了其他幾個方法，詳見上面的文檔鏈接。

// 如果需要密碼，則最好不要回顯密碼，而是顯示*符號。

// 最簡單的方式是使用readline-sync軟件包，其在API方面非常相似。

// Inquirer.js軟件包則提供了更完整、更抽象的解決方案。
// nquirer.js 可以執行許多操作，例如詢問多項選擇、展示單選按鈕、確認等。
const inquirer = require('inquirer')

var questions = [
  {
    type: 'input',
    name: 'name',
    message: "你叫什么名字?"
  },
  {
    type: 'input',
    name: 'name',
    message: "年林?"
  }
]

inquirer.prompt(questions).then(answers => {
  console.log(`你好 ${answers['name']}!`)
})
