var assert = require('chai').assert;
var minTpl = require('../lib/minTpl.js');

var units = [
    [
        {
            name: 'pany',
            age: 21
        },
        '你好，我叫{{name}}。我今年{{age}}岁！',
        '你好，我叫pany。我今年21岁！'
    ],
    [
        {
            name: 'pany',
            dog: {
                age: 2
            }
        },
        '你好，我的名字叫{{name}}。这是我家的狗狗，它今年{{dog.age}}岁了！',
        '你好，我的名字叫pany。这是我家的狗狗，它今年2岁了！'
    ],
    [
        {
            name: 'pany',
            friend: {
                name: '小明',
                dog: {
                    age: 3
                }
            }
        },
        '你好，我叫{{name}}。我有一个朋友叫{{friend.name}}，它家的小狗已经{{friend.dog.age}}岁了！',
        '你好，我叫pany。我有一个朋友叫小明，它家的小狗已经3岁了！'
    ],
]

describe('minTpl',function(){
    it('应该正确的将模板语法替换为数据',function(){
        units.forEach(function(testData,index){
            assert.equal(minTpl(testData[1],testData[0]),testData[2],'第'+index+'条测试用例不通过！')
        })
    })
})