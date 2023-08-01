let ui = new UI()
// let cart = new CartLS()
// cart.addCartItem(mock)

ui.showProducts(mock)

let cartAdd = document.querySelectorAll('.addToCart')


// event
document.addEventListener('DOMContentLoaded', UI.showCartItems())

cartAdd.forEach(i=> {
    addEventListener('click', addToCart)
})

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


let cartRemove = document.querySelectorAll('.remove')
cartRemove.forEach(i=>{
    addEventListener('click', removeFromCart)
})
function removeFromCart(e){
    console.log(e)
    if(e.target.hasAttribute('delete_id')) {
        let id = e.target.getAttribute('delete_id')
        CartLS.removeCartItem(id)
        location.reload()
    }
}

