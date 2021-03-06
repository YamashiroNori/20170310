window.addEventListener('load', function() {
  var submit = document.querySelector('#submit');
  submit.addEventListener('click', function() {
    console.log('test');
    var total = document.querySelector('#total');
    total.innerText = sumPrices(document.querySelectorAll('form > select.class-price > option:selected'));
  });
});

function sumPrices(elms) {
  return elms
    .map(elm => elm.value)
    .filter(v => isNaN(parseInt(v, 10)))
    .map((a, b) => a + b);
}

function numClass(elms) {
  return elms
    .filter(elm => elm.value)
    .length;
}

