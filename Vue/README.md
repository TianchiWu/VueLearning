## MVVM
Vue对应DOM，Model对应JS里的数据。绑定数据

## 传入Vue的options
##### el: string| HTMLElements
##### data: Object| Function(组件中必须是函数)
##### methods: Function

## Vue的生命周期
index.js Vue的入口

##### create: function(){}
##### mounted: function(){}
都是在Vue里有完整生命周期的函数

## 插值操作
##### v-text 纯文本
##### v-pre 不解析
##### v-cloak 解析之前，遮挡文本

##### v-bind 动态绑定属性

## v-on
##### @click语法糖 @click="handlesubmit"
##### 如果方法不需要额外参数，方法后的（）可以不添加，但是如果方法本身有一个参数，会默认将原生事件event参数传递进去
##### 如果需要传入某个参数，同时需要event，可以通过$event传入事件

##JS高阶函数
##### filter,map,reduce
##### columns = [10,20,30,40,120]
##### colunms.filter(function (n){ return boolean }) 
##### colunms.map(function(n){ return n*2 })
##### colunms.reduce(function(preValue,n){ return preValue+n },0-initialValue) 数组和
##### colunms.filter(n => n<100).map(n => n*2).reduce((pre,n) => pre + n)

## 组件化
##### 创建组件构造器、注册组件、使用组件