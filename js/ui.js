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
                        <button id="addToCart" class="btn btn-success text-light ms-3">Add To Cart</button>
                    </div>
                </div>
            </div>
            `
        });
        productContainer.innerHTML = products
    }

    showCartItems(){

    }
}

class Cart{
    constructor(){
    
    }
    
    addCartItem(data){
        
    }

    removeCartItem(){

    }
}