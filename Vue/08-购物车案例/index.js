const app = new Vue({
    el: '#app',
    data: {
        shoppingList: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                counter: 1
            },
            {
                id: 2,
                name: '《UNIX编程基础》',
                date: '2006-2',
                price: 59.00,
                counter: 1
            },
            {
                id: 3,
                name: '《Head First Java》',
                date: '2008-10',
                price: 87.00,
                counter:1
            },
            {
                id: 4,
                name: '《C++ premier plus》',
                date: '2009-1',
                price: 143.00,
                counter: 1
            }

        ]
    },
    methods: {
        decrement(index){
            this.shoppingList[index].counter--
            //console.log('decrement')
        },
        increment(index){
            this.shoppingList[index].counter++
            //console.log('increment')
        },
        removeHandler(index){
            this.shoppingList.splice(index,1)
        }
    },
    filters: {
        showPrice(price){
            return '￥'+price.toFixed(2)
        }
    },
    computed: {
        totalPrice(){
            //let totalPrice=0;
            // for(let item of this.shoppingList){
            //     totalPrice+=item.counter*item.price
            // }

            return this.shoppingList.reduce(function(previousValue,book){
                return previousValue + book.price * book.counter
            },0)
        }
    },
})