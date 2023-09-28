const mongoose = require('mongoose');

const Product = require('./models/Product');


const products = [
    {
        name:"Reebok",
        img:"https://images.unsplash.com/photo-1530389912609-9a007b3c38a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlZWJvayUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" ,
        price: 13000,
        desc: "Reebok is one of India's most well-known shoe companies." 
    },
    {
        name:"Adidas",
        img:"https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRpZGFzJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        price: 25000 , 
        desc:"Adidas is the second-largest sportswear manufacturer in the world."
    },
    {
        name:"Nike",
        price:51000,
        img:"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWRpZGFzJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        desc:"Nike is, without a doubt, the greatest and most dependable shoe brand in the world."
    },
    {
        name:"Puma", 
        img: "https://images.unsplash.com/photo-1608379894453-c6b729b05596?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVtYSUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", 
        price: 23790, 
        desc: "PUMA is a well-known footwear manufacturer that focuses on sports shoes."
    },
    {
        name:"Woodland" , 
        img:"https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" , 
        price: 25000 ,
        desc: "Woodland is a brand that offers high-quality shoes and boots for men."
    }
]

async function seedDB(){
    // await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("data seeded successfully");
}

module.exports = seedDB;

    