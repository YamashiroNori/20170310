window.addEventListener('load', function() {
  var submit = document.getElementById('submit');
  submit.addEventListener('click', function() {
    var total = document.getElementById('total');
    var test= sumPrices(document.querySelectorAll('form > select.class-price > option'));
    console.log(test);
  });
});

function sumPrices(elms) {
  return Array.from(elms, elm => elm.value)
    .filter(v => isNaN(parseInt(v, 10)))
    .map((a, b) => a + b);
}

function numClass(elms) {
  return elms
    .filter(elm => elm.value)
    .length;
}

