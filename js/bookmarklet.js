var discount = localStorage.getItem('brewdog_shop_discount');

if (!discount || discount == 1){
  discount = (100 - Number(window.prompt("How much discount percent do you get? (10/5)", 10))) / 100;
  localStorage.setItem('brewdog_shop_discount', discount);
}

var prices = document.getElementsByClassName("productTile__price");

for(var i = 0; i < prices.length; i++){
  price = parseFloat(prices[i].innerHTML.replace("£", ""));
  prices[i].innerHTML = "£" + Number(price * parseFloat(discount)).toFixed(2);
}
