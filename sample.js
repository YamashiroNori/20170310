$(function() {
    $('#button').on('click', function() {
      let sum = 0;
      //
      $('form > select.class-price > option:selected').each(function(i, el) {
        let price = parseInt(el.value, 10);
        if (!isNaN(price))
          sum += price;
      });
      //
      $('div.jigyo').each(function(i, el) {
        let name = $(el).val();
        console.log(name);
        if (name)
          sum += 1500;
      });

      $('#total').val(sum);
    });
});

