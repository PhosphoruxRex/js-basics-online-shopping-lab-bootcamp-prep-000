var cart = [];
console.log('aaaaaaaaaaaaaaaaa')
console.log('aaaaaaaaaaaaaaaaa')

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
  } else if (cart.length == 1) {
    return `In your cart, you have ${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}.`
  } else {
      var lines = []
      for (var i = 0; i < cart.length; i++) {
        if (i < cart.length-1) {
          lines.push(`${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}`)
        } else {
          lines.push(`and ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}.`)
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
      total += parseInt(cart[i].itemPrice)
    }
    return total
  }
}

function removeFromCart(item) {
  if (!cart.length) {
  } else {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].itemName == item) {
        cart = cart.splice(i, 1)
        return cart
      }
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  // write your code here
}



// shift(item) unshift()
// push(item) pop()
