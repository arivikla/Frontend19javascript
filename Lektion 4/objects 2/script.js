$(function() {

    //OBJECTS - används när vi bara behöver skapa ett objekt
    // const obj = {}

    // OBJECTS - kan ha olika properties i sig, samt funktioner
    // const obj = {
    //     firstName: 'Ari',
    //     lastName: 'Vikla',
    //     fullName: function() {
    //         return '${this.firstName} ${this.lastName}'
    //     }
    // };

    //CLASSES - används när vi vill skapa flera objekt av samma typ/mall
    // class product {
    //     constructor() {
    //         this.sku = sku
    //         this.name = name
    //         this.description = description
    //         this.price = price
    //         this.tax = tax
    //     }
    //     totalPrice() {
    //         return this.price + this.tax
    //     }
    // }    
    
// PROTOTYPE - så här ser en klass ut i grund och botten
function product() {
    this.sku = sku
    this.name = name
    this.description = description
    this.price = price
    this.tax = tax
    this.totalPrice = function() {
        return this.price + this.tax
    }
}

let product1 = new productClass()
let product2 = new  productPrototype()

const products = []

for(i=0;i<10;i++) {

    let sku = 'sku-$(i)';
    let name = 'product-$(i)';
    let description = 'this is a product';
    let price = 10 + i;
    let tax = 25;

    products[i] new productClass(sku, name, description,price,tax);

}

for(product of products) {
    console.log('product: ${product.name}, Total Price: ${product.totalPrice()}');
}

// EXTENDS - arv något ärver från en huvudklass

class computer extends productClass {
    constructor(specification) {
        super();

        this.specification = specification
    }

}

let c1 = new computer()

class computer {
    constructor(name,price,brand,specification) {
        this.name = name
        this.price = price
        this.brand = brand
        this.specification = specification
    }

    showproductInfo() {
        console.log('Product: ${this.name}, Price: ${this.price}')
    }
}

});