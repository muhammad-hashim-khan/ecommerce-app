const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"hashim@2006",
    database:"ecommerce"
});

db.connect();

// Register
app.post("/register",(req,res)=>{
    const {name,email,password} = req.body;

    db.query(
        "INSERT INTO users(name,email,password) VALUES(?,?,?)",
        [name,email,password],
        (err)=>{
            if(err) return res.send(err);

            res.json({
                message:"Registered"
            });
        }
    );
});

// Login
app.post("/login",(req,res)=>{
    const {email,password} = req.body;

    db.query(
        "SELECT * FROM users WHERE email=? AND password=?",
        [email,password],
        (err,result)=>{
            if(result.length>0)
                res.json(result[0]);
            else
                res.json({
                    message:"Invalid Login"
                });
        }
    );
});

// Get Products
app.get("/products",(req,res)=>{
    db.query(
        "SELECT * FROM products",
        (err,result)=>{
            res.json(result);
        }
    );
});

// Add Product (Admin)
app.post("/products",(req,res)=>{
    const {name,price} = req.body;

    db.query(
        "INSERT INTO products(name,price) VALUES(?,?)",
        [name,price],
        ()=>{
            res.json({
                message:"Product Added"
            });
        }
    );
});

// Add To Cart
app.post("/cart",(req,res)=>{
    const {user_id,product_id} = req.body;

    db.query(
        "INSERT INTO cart(user_id,product_id,quantity) VALUES(?,?,1)",
        [user_id,product_id],
        ()=>{
            res.json({
                message:"Added To Cart"
            });
        }
    );
});

// View Cart
app.get("/cart/:userId",(req,res)=>{

    db.query(
        `SELECT cart.id, products.name, products.price
         FROM cart
         JOIN products
         ON cart.product_id=products.id
         WHERE cart.user_id=?`,
        [req.params.userId],
        (err,result)=>{
            res.json(result);
        }
    );
});

// Checkout
app.post("/checkout",(req,res)=>{

    const {user_id,product_id} = req.body;

    db.query(
        `INSERT INTO orders
        (user_id,product_id,quantity)
        VALUES(?,?,1)`,
        [user_id,product_id],
        ()=>{
            res.json({
                message:"Order Placed"
            });
        }
    );
});

// Track Orders
app.get("/orders/:userId",(req,res)=>{

    db.query(
        `SELECT orders.id,
                products.name,
                orders.status
         FROM orders
         JOIN products
         ON orders.product_id=products.id
         WHERE orders.user_id=?`,
        [req.params.userId],
        (err,result)=>{
            res.json(result);
        }
    );
});

// Admin View Orders
app.get("/orders",(req,res)=>{

    db.query(
        "SELECT * FROM orders",
        (err,result)=>{
            res.json(result);
        }
    );
});

app.listen(5000,()=>{
    console.log("Server Running on 5000");
});