class UI {
    constructor(){
        
        this.cartContainer = document.querySelector('#cart-container')
    }

    showProducts(data){
        let productContainer = document.querySelector('#product-container')
        let products =''
        data.forEach(product => {
            products += `
            <div class="card mb-3 d-flex flex-md-column flex-lg-row">
                <div class="col-md-12 col-lg-3">
                    <img src=${product.img} alt="" class="card-img-top image" />
                </div>
                <div class="col-md-12 col-lg-9 h-100">
                    <div class="d-flex justify-content-between bg-secondary text-light px-3">
                        <h4>${product.name}</h4>
                        <h4>${product.price} BDT</h4>
                    </div>
                    <div>
                        <p class="blockquote mt-2 ms-3">${product.desc}</p>
                        <a class="btn btn-success text-light ms-3 addToCart" product_id=${product.id}>Add To Cart</a>
                    </div>
                </div>
            </div>
            `
        });
        productContainer.innerHTML = products
    }

    static showCartItems(){
        let cartContainer = document.querySelector('#cart-container')
        let table = document.querySelector('#table')
        let quantity = document.querySelector('#quantity')
        let noCart = document.querySelector('#no-cart')
        let totalAmount = document.querySelector('#total')
        let cart = JSON.parse(localStorage.getItem('cart'))
        let cartItems = cart != null ? cart.cartItems : null
        if(cartItems == null ) {
            cartContainer.innerHTML = "<h4 class='text-center w-100 mt-5'>No cart items</h4>"
            noCart.classList.remove("d-none")
        } else {
            table.classList.remove("d-none")
            totalAmount.classList.remove("d-none")
            quantity.classList.remove("d-none")
            quantity.textContent = `${cart.totalQTY}`
            totalAmount.innerHTML = `Total: ${cart.total}`
            let items =''
            cartItems.forEach((item,index)=>{
                items += `
                    <tr>
                        <th scope="row">${index+1}</th>
                        <td><img src=${item.img} alt="" class="border border-dark" style="width: 50px; height: 50px; border-radius: 50%;"></td>
                        <td>${item.name}</td>
                        <td>${item.qty}</td>
                        <td>${item.price}</td>
                        <td>${item.qty * item.price}</td>
                        <td>X</td>
                    </tr>
                `
            })
            cartContainer.innerHTML = items
        }
    }
}

class CartLS{
    static getCartItems(){
        let cart
        if(localStorage.getItem('cart') === null) {
            cart = {
                cartItems: [],
                totalQTY: 0,
                total: 0
            }
        } else {
            cart = JSON.parse(localStorage.getItem('cart'))
        }

        return cart
    }
    
    static addCartItem(item){

        let cart = CartLS.getCartItems()
        let items = cart.cartItems
        let idMatch = false

        items.forEach(itemLS => {
            if(item.id == itemLS.id) {
                itemLS.qty += 1
                idMatch = true
                cart.cartItems = items
                let total = 0
                for (let item of items) {
                    total+= item.price*item.qty
                }
                let totalQTY = 0
                for(let item of items) {
                    totalQTY += item.qty
                }
                cart.total = total
                cart.totalQTY = totalQTY
                localStorage.setItem('cart', JSON.stringify(cart))
            }
        })

        if(!idMatch) {
            items.push(item)
            let total = 0
            for (let item of items) {
                total+= item.price*item.qty
            }
            
            let totalQTY = 0
            for(let item of items) {
                totalQTY += item.qty
            }
            cart.total = total
            cart.totalQTY = totalQTY
            localStorage.setItem('cart', JSON.stringify(cart))
        }

    }

    removeCartItem(id){

    }
}