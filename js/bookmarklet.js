var discount = localStorage.getItem('brewdog_shop_discount');
if (!discount || discount == 1){
  discount = (100 - Number(window.prompt("How much discount percent do you get? (10/15/20)", 10))) / 100;
  localStorage.setItem('brewdog_shop_discount', discount);
}
var prices = document.getElementsByClassName("price");
for(var i = 0; i < prices.length; i++){
  price = parseFloat(prices[i].innerHTML.replace("£", ""));
  price = Number(price * parseFloat(discount)).toFixed(2);
  prices[i].innerHTML = "£" + price;
}
