(function (name, context, fn) {
    if (typeof module != 'undefined' && module.exports) {
        // Node 环境
        module.exports = fn();
    } else if (typeof context['define'] == 'function' && (context['define']['amd'] || context['define']['cmd'])) {
        // Require.js 或 Sea.js 环境
        define(fn);
    } else {
        // client 环境
        context[name] = fn();
    }
})('minTpl', this, function () {
    return function (tpl, data) {
        // 正则
        var reg = /{{([a-zA-Z$_][a-zA-Z$_0-9\.]*)}}/g;
        // raw: 匹配的原始字符串
        // key: 匹配的键名
        // offset: 匹配的下标
        // string: 原始模板
        return tpl.replace(reg, function (raw, key, offset, string) {
            var keyList = key.split('.');
            var lookup = data;
            // 获取值
            while (keyList.length > 0) {
                lookup = lookup[keyList.shift()];
            }
            return lookup || raw;
        });
    }
});