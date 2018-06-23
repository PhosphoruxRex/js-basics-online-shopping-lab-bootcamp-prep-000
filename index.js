var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var temp = {itemName: item, itemPrice: Math.floor((Math.random() * 100) + 1)}
  cart.push(temp)
  return `${temp.itemName} has been added to your cart.`
}

function viewCart() {
  if (!cart.length) {
    return 'Your shopping cart is empty.'
  } else {
      lines = []
      for (var i = 0; i < cart.length; i++) {
        if (i < cart.length-1) {
          lines.push(`${cart[i]["itemName"]} at ${cart[i][itemPrice]}`)
        } else {
          lines.push(`and ${cart[i]["itemName"]} at ${cart[i][itemPrice]}.`)
        }
      }
    return `In your cart, you have ${lines.join(', ')}`
  }

}

function total() {
  total = 0
  if (!cart.length) {
    return total
  } else {

    for (var i = 0; i < cart.length; i++) {
      console.log(cart[i])
      total += parseInt(cart[i][itemPrice])
    }
    return total
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}



// shift(item) unshift()
// push(item) pop()
