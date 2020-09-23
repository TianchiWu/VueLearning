const {add, sub} = require('./js/mathUtils')

console.log(add(20,30))
console.log(sub(20,30))

//依赖css文件
require('./css/normal.css')
require('./css/special.less')

// document.writeln('<h2>标题</h2>')

import Vue from 'vue'

const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World!'
    }
})