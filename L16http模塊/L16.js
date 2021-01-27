const http = require('http')

// http.METHODS
// 此屬性列出了所有支持的HTTP 方法：
console.log(http.METHODS)

// http.STATUS_CODES
// 此屬性列出了所有的HTTP 狀態代碼及其描述：
console.log(http.STATUS_CODES)

// http.globalAgent
// 指向Agent對象的全局實例，該實例是http.Agent類的實例。
// 用於管理HTTP 客戶端連接的持久性和復用，它是Node.js HTTP 網絡的關鍵組件。
// 稍後會在http.Agent類的說明中提供更多描述。


// http.createServer()
// 返回http.Server類的新實例
const server = http.createServer((req,res)=>{
    // 回條每個單獨請求
})

// http.request()
// 發送HTTP請求到服務器，並創建http.ClientRequest類的實例。
// http.get()
// 類似於http.request()，但會自動地設置HTTP方法為GET，並自動地調用req.end()。