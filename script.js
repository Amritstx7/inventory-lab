// Base Class: Product
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    // Returns total value (price * quantity)
    getTotalValue() {
        return this.price * this.quantity;
    }

    // Returns formatted string
    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }

    // Static method to apply discount to all products
    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price = product.price * (1 - discount);
        });
    }
}

// Subclass: PerishableProduct (inherits from Product)
class PerishableProduct extends Product {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity); // call parent constructor
        this.expirationDate = expirationDate;
    }

    // Override toString method
    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
    }
}

// Create products (at least 5 total, 2 perishable)
let apple = new Product("Apple", 2.50, 10);
let milk = new PerishableProduct("Milk", 1.50, 10, "2024-12-31");
let yogurt = new PerishableProduct("Yogurt", 3.00, 5, "2024-11-20");
let bread = new Product("Bread", 2.00, 20);
let eggs = new Product("Eggs", 4.00, 12);

// Store Class
class Store {
    constructor() {
        this.inventory = []; // holds all products
    }

    // Add product to store
    addProduct(product) {
        this.inventory.push(product);
    }

    // Calculate total inventory value
    getInventoryValue() {
        let total = 0;
        this.inventory.forEach(product => {
            total += product.getTotalValue();
        });
        return total;
    }

    // Find product by name
    findProductByName(name) {
        for (let product of this.inventory) {
            if (product.name === name) {
                return product;
            }
        }
        return null;
    }
}

// Create store
let store = new Store();

// Add all products to store
store.addProduct(apple);
store.addProduct(milk);
store.addProduct(yogurt);
store.addProduct(bread);
store.addProduct(eggs);

// Print all products
console.log("All Products:");
store.inventory.forEach(product => {
    console.log(product.toString());
});

// BEFORE discount
console.log("Total Inventory Value BEFORE discount:", store.getInventoryValue());

// Apply 15% discount (assignment requirement)
Product.applyDiscount(store.inventory, 0.15);

// AFTER discount
console.log("Total Inventory Value AFTER discount:", store.getInventoryValue());

// Find a product
let foundProduct = store.findProductByName("Milk");

if (foundProduct) {
    console.log("Found Product:", foundProduct.toString());
} else {
    console.log("Product not found");
}