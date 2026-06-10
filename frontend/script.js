const API = "http://localhost:5000";

// Register
async function register(){

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    await fetch(`${API}/register`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,
            email,
            password
        })
    });

    alert("Registered Successfully");
    window.location = "login.html";
}

// Login
async function login(){

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch(`${API}/login`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email,
            password
        })
    });

    const user = await res.json();

    localStorage.setItem("user",JSON.stringify(user));

    alert("Login Successful");

    window.location = "index.html";
}

// Load Products
async function loadProducts(){

    const res = await fetch(`${API}/products`);
    const products = await res.json();

    const div = document.getElementById("products");

    if(!div) return;

    div.innerHTML = "";

    products.forEach(product=>{

        div.innerHTML += `
<div class="card">
    <h3>${product.name}</h3>

    <div class="price">
        ₹${product.price}
    </div>

    <button onclick="addToCart(${product.id})">
        Add To Cart
    </button>
</div>
`;
    });
}

// Add To Cart
async function addToCart(productId){

    const user = JSON.parse(localStorage.getItem("user"));

    await fetch(`${API}/cart`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            user_id:user.id,
            product_id:productId
        })
    });

    alert("Added To Cart");
}

// Load Cart
async function loadCart(){

    const user = JSON.parse(localStorage.getItem("user"));

    if(!user) return;

    const res = await fetch(
        `${API}/cart/${user.id}`
    );

    const cart = await res.json();

    const div = document.getElementById("cart");

    if(!div) return;

    cart.forEach(item=>{

        div.innerHTML += `
        <div class="card">
            ${item.name} - ₹${item.price}

            <button onclick="checkout(${item.id})">
                Checkout
            </button>
        </div>
        `;
    });
}

// Checkout
async function checkout(productId){

    const user = JSON.parse(localStorage.getItem("user"));

    await fetch(`${API}/checkout`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            user_id:user.id,
            product_id:productId
        })
    });

    alert("Order Placed");
}

// Load Orders
async function loadOrders(){

    const user = JSON.parse(localStorage.getItem("user"));

    if(!user) return;

    const res = await fetch(
        `${API}/orders/${user.id}`
    );

    const orders = await res.json();

    const div = document.getElementById("orders");

    if(!div) return;

    orders.forEach(order=>{

        div.innerHTML += `
        <div class="card">
            ${order.name}
            <br>
            Status: ${order.status}
        </div>
        `;
    });
}

// Admin Add Product
async function addProduct(){

    const name =
        document.getElementById("productName").value;

    const price =
        document.getElementById("productPrice").value;

    await fetch(`${API}/products`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,
            price
        })
    });

    alert("Product Added");
}

loadProducts();
loadCart();
loadOrders();