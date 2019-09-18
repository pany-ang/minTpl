var minTpl = require('../lib/minTpl.js');

var tpl = '你好，我的名字叫{{name}}。这是我家的狗狗，它今年{{dog.age}}岁了！';
var data = {
    name: 'pany',
    dog: {
        age: 2
    }
};

var str = minTpl(tpl, data);
console.log(str);