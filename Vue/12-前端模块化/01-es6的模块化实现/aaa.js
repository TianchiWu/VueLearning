let name = '小明'
let age = 19
export let flag = true

export function sum(num1, num2){
    return num1 + num2
}

if(flag){
    console.log(sum(20,30))
}

const address = 'Beijing'
//导出功能，让导入命名
export default address
