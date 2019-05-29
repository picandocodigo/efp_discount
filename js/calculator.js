console.log("cargó");
var amountInput = document.getElementById("amount");
var discounted = document.getElementById("discounted");
var efp5 = document.getElementById("efp5");
var efp10 = document.getElementById("efp10");
var daytime = document.getElementById("daytime");
var ambassador = document.getElementById("ambassador");
var tattoo = document.getElementById("tattoo");

efp5.addEventListener('change', function(){
  discount(this, 0.95);
});
efp10.addEventListener('change', function(){
  discount(this, 0.9);
});
daytime.addEventListener('change', function(){
  discount(this, 0.85);
});
ambassador.addEventListener('change', function(){
  discount(this, 0.95);
});
tattoo.addEventListener('change', function(){
  discount(this, 0.80);
});

function discount(element, discount){
  if(amountInput.value == '' || amountInput.value == null){
    element.checked = false;
    return;
  }
  if(discounted.value != ''){
    amount = parseFloat(discounted.value);
  } else {
    amount = parseFloat(amountInput.value);
  }
  if (element.checked == true){
    amount = amount * discount;
  } else {
    amount = amount * 100 / (discount * 100);
  }
  discounted.value = Number((amount).toFixed(2));;
}
