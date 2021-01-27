// version 表明了當前的版本。
// name 設置了應用程序/軟件包的名稱。
// description 是應用程序/軟件包的簡短描述。
// main 設置了應用程序的入口點。
// private如果設置為true，則可以防止應用程序/軟件包被意外地發佈到npm。
// scripts 定義了一組可以運行的node 腳本。
// dependencies設置了作為依賴安裝的npm軟件包的列表。
// devDependencies設置了作為開發依賴安裝的npm軟件包的列表。
// engines 設置了此軟件包/應用程序在哪個版本的Node.js 上運行。
// browserslist 用於告知要支持哪些瀏覽器（及其版本）。



/*
其他進階分類
name 設置軟件包的名稱。 ex"name": "nodejs_cn"

author 列出軟件包的作者名稱。
ex：
{
  "author": {
    "name": "NodeJS中文网",
    "email": "mail@nodejs.cn",
    "url": "http://nodejs.cn"
  }
}


contributors 除作者外，該項目可以有一個或多個貢獻者。此屬性是列出他們的數組。
{
  "contributors": [
    {
      "name": "NodeJS中文网",
      "email": "mail@nodejs.cn",
      "url": "http://nodejs.cn"
    }
  ]
}

bugs鏈接到軟件包的問題跟踪器，最常用的是GitHub 的issues 頁面。
{
  "bugs": "https://github.com/nodejscn/node-api-cn/issues"
}

homepage 設置軟件包的主頁。
{
  "homepage": "http://nodejs.cn"
}

version 指定軟件包的當前版本。
"version": "1.0.0"

license 指定軟件包的許可證。

keywords 此屬性包含與軟件包功能相關的關鍵字數組。
"keywords": [
  "email",
  "machine learning",
  "ai"
]

description 此屬性包含了對軟件包的簡短描述。

repository 此屬性指定了此程序包倉庫所在的位置。
"repository": "gitlab:nodejscn/node-api-cn",

"repository": {
  "type": "git",
  "url": "https://github.com/nodejscn/node-api-cn.git"
}

main 設置軟件包的入口點。
"main": "src/main.js"

private 如果設置為true，則可以防止應用程序/軟件包被意外發佈到npm上。
"private": true

engines
"engines": {
  "node": ">= 6.0.0",
  "npm": ">= 3.0.0",
  "yarn": "^0.13.0"
}

browserslist
"browserslist": [
  "> 1%",
  "last 2 versions",
  "not ie <= 8"
]


*/