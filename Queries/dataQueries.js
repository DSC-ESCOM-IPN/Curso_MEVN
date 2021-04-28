use mydb;
db.dropDatabase();
use mydb;

db.createCollection("users");
db.createCollection("products");
db.createCollection("invoices");

db.users.insert({
    "nick-name": "paul",
    "Name": "Paul",
    "LastName": "Cruz",
    "birth": new Date("12/8/2000")
});

db.products.insertMany([
    {
        "name": "jeans",
        "price": 499,
        "stock": 20,
        "tags": ["jeans", "blue", "sale"]
    }, {
        "name": "t-shirt",
        "price": 150,
        "stock": 100,
        "tags": ["t-shirt", "red", "cotton"]
    }, {
        "name": "shoes",
        "price": 599,
        "stock": 5,
        "tags": ["shoes", "casual", "brown"]
    }
]);

db.invoices.insertMany([
    {
        "subtotal": 500,
        "tax": 5,
        "total": 555,
        "date": new Date(),
        "items": [{
            "name": "hat",
            "price": 250,
            "quantity": 1
        }, {
            "name": "socks",
            "price": 100,
            "quantity": 1
        }, {
            "name": "keychain",
            "price": 50,
            "quantity": 1
        }]
    }, {
        "subtotal": 1000,
        "tax": 20,
        "total": 1020,
        "date": new Date(),
        "items": [{
            "name": "jeans",
            "price": 499,
            "quantity": 1
        }, {
            "name": "sneakers",
            "price": 501,
            "quantity": 1
        }, {
            "name": "keychain",
            "price": 50,
            "quantity": 1
        }]
    }
]);