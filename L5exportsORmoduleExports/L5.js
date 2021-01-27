
const car = {
    brand:'Rord',
    model:'Fiesta'
}

// module.exports 將對象賦值給 module.exports
// module.exports = car;

// exports 將要導出的對象添加為exports的屬性
exports.car = car


// 前者公開了它指向的對象。後者公開了它指向的對象的​​屬性。