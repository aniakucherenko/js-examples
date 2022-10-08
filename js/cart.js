const cart = {
    items: [],
    getItems() {
        return this.items;  
    },
    add (product) {
        for (const item of this.items) {

            if (item.name === product.name) {
                item.quantity += 1;
                return;
            }
        }
        const newProduct = {
            ...product,
            quantity: 1,
        };

        this.items.push(newProduct);
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

        for ( const item.price, item.quantity of this.items) {
            total += item.price * item.quantity;
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