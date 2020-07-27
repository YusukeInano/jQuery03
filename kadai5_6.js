(function($, window) {
  $(function() {
    $('#zip1').jpostal({
        click : '#search',
        postcode : [
            '#zip1'
        ],
        address : {
            '#pref'  : '%3',
            '#city'  : '%4',
            '#street'  : '%5'
        }
    });
  });
})(jQuery, window);