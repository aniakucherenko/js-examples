const cart = {
    items: [],
    getItems() {
        return this.items;  
    },
    add (product) {
        const newProduct = {
            ...product,
            quantity: 0,
        };

        this.items.push(product);
    },
    remove (productName) {

        for (let i = 0; i < this.items.length; i +=1) {

            if (productName === this.items[i].name){
                return 'The product is finded', productName;
                this.items.splice(i, 1);
            }
        }
    },
    clear () {

        this.items = [];
    },
    countTotalPrice() {
        let total = 0;

        for ( const item of this.items) {
            total += item.price;
        }
        return total;
    },  
    increaseQuantity (productName) {},
    decreaseQuantity (productName) {},

};

console

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'orange', price: 60 });
cart.add({ name: 'strawberry', price: 110 });