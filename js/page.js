new Vue({
    el: '#f_table',
    data: {
        itemList: [{
            id: 1,
            name: '生活用品',
            price: 600,
            quantity: 5
        }, {
            id: 2,
            name: '家电',
            price: 800,
            quantity: 2
        }, {
            id: 3,
            name: '数码',
            price: 400,
            quantity: 2
        }, {
            id: 4,
            name: '书本',
            price: 200,
            quantity: 6
        }]
    },
    computed: {
        //计算总数量
        count: function() {
            var quantity = 0;
            for (var i in this.itemList) {
                quantity += parseInt(this.itemList[i].quantity);
            }
            return quantity;
        },
        total: function() {
            var total = 0;
            for (var i in this.itemList) {
                total += this.itemList[i].price * this.itemList[i].quantity;
            }
            return total;
        }
    },
    methods: {
        //增加
        add: function(index) {
            var vm = this;
            vm.itemList[index].quantity++;
        },
        //减少
        reduce: function(index) {
            var vm = this;
            vm.itemList[index].quantity--;
            if (vm.itemList[index].quantity <= 0) {
                if (confirm("你确定移除该商品？")) {
                    vm.itemList.splice(index, 1)
                }
            }
        },
        //移除
        remove: function(index) {
            var vm = this;
            if (confirm("你确定移除该商品？")) {
                vm.itemList.splice(index, 1)
            }
        },
        //清空
        empty: function() {
            var vm = this;
            vm.itemList.splice(0, vm.itemList.length);
        }
    }
})