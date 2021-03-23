const faker = require("faker");

// Set locale to use Vietnamese
faker.locale = "vi";

// Random data
console.log(faker.commerce.department());
console.log(faker.commerce.productName());
console.log(faker.commerce.productName());
console.log(faker.commerce.productDescription());

console.log(faker.random.uuid());
console.log(faker.image.imageUrl());
console.log(faker.name.findName());
