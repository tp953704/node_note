const path = require('path')

// path.basename()
// 返迴路徑的最後一部分。第二個參數可以過濾掉文件的擴展名：
require('path').basename('/test/something') //something
require('path').basename('/test/something.txt') //something.txt
require('path').basename('/test/something.txt', '.txt') //something

// path.dirname()
// 返迴路徑的目錄部分：
require('path').dirname('/test/something') // /test
require('path').dirname('/test/something/file.txt') // /test/something

// path.extname()
// 返迴路徑的擴展名部分。
require('path').extname('/test/something') // ''
require('path').extname('/test/something/file.txt') // '.txt'

// path.isAbsolute()
// 如果是絕對路徑，則返回true。
require('path').isAbsolute('/test/something') // true
require('path').isAbsolute('./test/something') // false

// path.normalize()
// 當包含類似.、..或雙斜杠等相對的說明符時，則嘗試計算實際的路徑：
require('path').normalize('/users/joe/..//test.txt') //'/users/test.txt'

// path.parse()
/*
解析對象的路徑為組成其的片段：

root: 根路徑。
dir: 從根路徑開始的文件夾路徑。
base: 文件名+ 擴展名
name: 文件名
ext: 文件擴展名
*/ 

require('path').parse('/users/test.txt')
/*
{
  root: '/',
  dir: '/users',
  base: 'test.txt',
  ext: '.txt',
  name: 'test'
}
*/ 

// path.relative()
// 接受2 個路徑作為參數。基於當前工作目錄，返回從第一個路徑到第二個路徑的相對路徑。
require('path').relative('/Users/joe', '/Users/joe/test.txt') //'test.txt'
require('path').relative('/Users/joe', '/Users/joe/something/test.txt') //'something/test.txt'


// path.resolve()
// 可以使用path.resolve()獲得相對路徑的絕對路徑計算：
path.resolve('joe.txt') //'/Users/joe/joe.txt' 如果从主文件夹运行
path.resolve('tmp', 'joe.txt') //'/Users/joe/tmp/joe.txt' 如果从主文件夹运行
path.resolve('/etc', 'joe.txt') //'/etc/joe.txt'