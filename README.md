# minTpl
简易JavaScript模板引擎
## 安装
```bash
npm install mintpl
```
## Node环境使用
```javascript
var minTpl = require('mintpl');

var tpl = '你好，我的名字叫{{name}}。这是我家的狗狗，它今年{{dog.age}}岁了！';
var data = {
    name: 'pany',
    dog: {
        age: 2
    }
};

var str = minTpl(tpl, data);
console.log(str);
```
## 单元测试
```bash
npm test
```
