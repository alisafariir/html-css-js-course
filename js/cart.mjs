import { addItem, getItem } from "./localstorage.mjs"
export let cartCount = 0;


function load() {
    const localCount = getItem("CART_COUNT")

    if (localCount) {
        cartCount = localCount
    }
    updateCartCountDom(localCount)
}

export function addToCart() {
    cartCount = cartCount + 1
    updateCartCountDom(cartCount)
    addItem("CART_COUNT", cartCount)
}


// for update count 
export function updateCartCountDom(value) {
    document.querySelector("#cart .count").innerHTML = value
}

load()
