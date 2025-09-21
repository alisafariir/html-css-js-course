import { addToCart } from './cart.mjs'


document.querySelectorAll(".product").forEach((article) => {
  article.addEventListener("click", () => {
    addToCart()
  })
})

