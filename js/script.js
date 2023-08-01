let ui = new UI()
// let cart = new CartLS()
// cart.addCartItem(mock)

ui.showProducts(mock)

let cartAdd = document.querySelectorAll('.addToCart')

// events
document.addEventListener('DOMContentLoaded', UI.showCartItems())
cartAdd.forEach(i=> {
    addEventListener('click', addToCart)
})


// functions

function addToCart(e){
    
    if(e.target.hasAttribute('product_id')) {
       let id = e.target.getAttribute('product_id')
       
    // fetch data from source (mock-data.js)
        mock.forEach(item=> {
            if(id == item.id) {
                let cartData = {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    img: item.img,
                    qty: 1
                }

                CartLS.addCartItem(cartData)
            }
        })
        location.reload()
    }
}

