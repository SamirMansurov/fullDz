const showCartIdBtn = document.querySelector(".btn_menu");
const cartModal = document.getElementById("cartModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const cartIdDisplay = document.getElementById("cartIdDisplay");
const cont = document.querySelector('.container')
const cart_cont = document.querySelector('#cartIdDisplay')
const five = document.querySelector('.btn_one')
const all = document.querySelector('.btn_vse')
const total_view = document.querySelector('#total_view')
let cart = []

reload(arr, cont, Product)
reload(cart, cart_cont, CartItem)

five.onclick = () => {
    reload(arr.slice(0, 5), cont, Product)
}
all.onclick = () => {
    reload(arr, cont, Product)
}


showCartIdBtn.onclick= () => {

    cartModal.classList.add("open");
    cartModal.style.display = 'block';
}

closeModalBtn.onclick = () => {
    cartModal.classList.remove("open");
    setTimeout(() => {
        cartModal.style.display = 'none';
    }, 300);
}

