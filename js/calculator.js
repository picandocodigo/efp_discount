var amountInput = document.getElementById("amount");
var discounted = document.getElementById("discounted");

// Declare discounts
var efp5 = {
  element: document.getElementById("efp5"),
  discount: 5
};
var efp10 = {
  element: document.getElementById("efp10"),
  discount: 10
};
var daytime = {
  element: document.getElementById("daytime"),
  discount: 15
};
var ambassador = {
  element: document.getElementById("ambassador"),
  discount: 5
}
var tattoo = {
  element: document.getElementById("tattoo"),
  discount: 20
};
var discounts = [efp5, efp10, daytime, ambassador, tattoo];

// Specific "uncheck" other discounts that don't apply
efp5.element.addEventListener('change', function(){
  if (efp10.element.checked == true){
    efp10.element.checked = false;
  }
});

efp10.element.addEventListener('change', function(){
  if (efp5.element.checked == true){
    efp5.element.checked = false;
  }
})


tattoo.element.addEventListener('change', function(){
  [daytime, ambassador].forEach(function(disc){
    if (disc.element.checked == true) {
      disc.element.checked = false;
    }
  })
});

[daytime, ambassador].forEach(function(disc){
  disc.element.addEventListener('change', function(){
    if(tattoo.element.checked == true){
      tattoo.element.checked = false;
    }
  });
})

// Calculate discounts every time we check something
discounts.forEach(function(disc){
  disc.element.addEventListener('change', function(){
    calculate_discounts();
  });
});

// Calculate discounts every time we check something
amountInput.addEventListener('input', function(){
  calculate_discounts();
})

function calculate_discounts(){
  if(amountInput.value == '' || amountInput.value == null){
    discounted.value = '';
    return;
  }
  var amount = amountInput.value;
  var totalDiscount = parseFloat(amount);
  discounts.forEach(function(discount){
    if (discount.element.checked == true){
      totalDiscount = totalDiscount * (100 - discount.discount) / 100;
    }
  });
  discounted.value = Number((totalDiscount).toFixed(2));;
}
