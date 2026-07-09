let cart=localStorage.getItem("cart");
if (cart==null) {
    cart=0;
}
document.getElementById("cartCount").innerText=cart;
document.getElementById("addCart").addEventListener("click",function () {
cart++;
    localStorage.setItem("cart", cart);
    document.getElementById("cartCount").innerText = cart;

});
