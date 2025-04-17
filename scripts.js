var products = [
    {
        "photo": "img/big-mac.png",
        "name": "Big Mac",
        "price": 23.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/mc-chicken.png",
        "name": "Mc Chicken",
        "price": 19.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/double-cb.png",
        "name": "Double Cheese Burger",
        "price": 20.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/fries.png",
        "name": "Batata frita",
        "price": 8.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/nuggets.png",
        "name": "Mc Nuggets",
        "price": 11.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/salad.png",
        "name": "Salada",
        "price": 7.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/cola.png",
        "name": "Coca Cola",
        "price": 15.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/lipton.png",
        "name": "Ice Tea",
        "price": 12.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/water.png",
        "name": "Água",
        "price": 4.59,
        "active": false,
        "quantity": 1
    }
];

const selfServiceMachine = {
    data() {
        return {
            products: window.products
        }
    },
    methods: {
        total: function () {
            var total = 0;

            this.products.forEach(function (item) {
                if (item.active) {
                    total += item.price * item.quantity;
                }
            });
            return total.toFixed(2);
        }
    }
};

Vue.createApp(selfServiceMachine).mount('#app');