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
        let cartItems = JSON.parse(localStorage.getItem('cartItems'))
        if(cartItems == null) {
            cartContainer.innerHTML = "<h4 class='text-center'>No cart items</h4>"
        } else {
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
    constructor(){
    
    }

    static getCartItems(){
        let cartItems
        if(localStorage.getItem('cartItems') === null) {
            cartItems = []
        } else {
            cartItems = JSON.parse(localStorage.getItem('cartItems'))
        }

        return cartItems
    }
    
    static addCartItem(item){

        let items = CartLS.getCartItems()
        let idMatch = false

        items.forEach(itemLS => {
            if(item.id == itemLS.id) {
                itemLS.qty += 1
                idMatch = true
                return localStorage.setItem('cartItems', JSON.stringify(items))
            }
        })

        if(!idMatch) {
            items.push(item)
            localStorage.setItem('cartItems', JSON.stringify(items))
        }

    }

    removeCartItem(id){

    }
}