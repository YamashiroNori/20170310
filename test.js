window.addEventListener('load', function() {
  var total = document.getElementById('total');
  var submit = document.getElementById('submit');
  submit.addEventListener('click', function() {
    var priceElems = document.querySelectorAll(
      'form > select > option.class-price');
    var classElems = document.querySelectorAll(
      'form input.class-price');

    total.value = sumPrices(priceElems)
      + sumClassPrices(classElems, 1000);
  });
});

function sumPrices(elms) {
  return Array.from(elms)
    .filter(elm => elm.selected)
    .map(elm => parseInt(elm.value, 10))
    .filter(n => !isNaN(n))
    .reduce((a, b) => a + b);
}

function sumClassPrices(elms, price) {
  return Array.from(elms)
    .filter(elm => elm.value)
    .length * price;
}

