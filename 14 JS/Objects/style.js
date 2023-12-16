// Your code goes in here:
const product = {
    
    "name":"Gummy Bears",
    "inStock":true,
    "price":1.99,
    "flavors":["grape", "apple", "cherry"]
    
}

console.log(product);
console.log(product.name);
console.log(product['flavors']);
console.log(product.flavors[1]);

//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:
var fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;
console.log(fullAddress);



restaurant.name = "Bhargov";
console.log(restaurant);


