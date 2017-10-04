var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var newItem = {[item]: Math.ceil(Math.random()*100)}
 if(cart.push(newItem)) console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  var string = "In your cart, you have "
  if(cart.length === 0) {
    console.log("Your shopping cart is empty")
  }else{
    for(var i = 0; i<cart.length;i++){
      if(i != 0 && cart.length === 2) string += " and "
      else if(i != 0)string += ", and "
      var keys = Object.keys(cart[i])
      string+= `${keys[0]} at $${cart[keys[0]]}`
    }
    string += "."
    console.log(string)
  }
}

function total() {
  // write your code here
  var cost = 0
  for(var i = 0; i < cart.length; i++){
    var item = cart[i]
    var key = Object.keys(item)
    cost += cart[key[0]]
  }
  return cost
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
