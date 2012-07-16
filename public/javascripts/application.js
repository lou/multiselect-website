// Put your application scripts here
(function($){
  $(function(){
    $('.multiselect').multiSelect();

    $('#keep-order').multiSelect({
      keepOrder: true
    });

    $('#searchable').multiSelect({
      selectableHeader: "<input type='text' id='search' autocomplete='off' placeholder='country name'>"
    });


    $('#search').quicksearch($('li', '#ms-searchable' )).on('keydown', function(e){
      if (e.keyCode == 40){
        $(this).trigger('focusout');
        $('#searchable').focus();
        return false;
      }
    });

    $('#optgroup').multiSelect({});

    $('#custom-headers').multiSelect({
      selectableHeader: "<div class='custom-header'>Selectable item</div>",
      selectedHeader: "<div class='custom-header'>Selected items</div>"
    });

    $('#callbacks').multiSelect({
      afterSelect: function(value, text){
        alert("Select value: "+value);
      },
      afterDeselect: function(value, text){
        alert("Deselect value: "+value);
      }
    });

    $('#public-methods').multiSelect();
    $('#select-all').click(function(){
      $('#public-methods').multiSelect('select_all');
      return false;
    });
    $('#deselect-all').click(function(){
      $('#public-methods').multiSelect('deselect_all');
      return false;
    });
    $('#select-fr').click(function(){
      $('#public-methods').multiSelect('select', 'fr');
      return false;
    });
    $('#deselect-fr').click(function(){
      $('#public-methods').multiSelect('deselect', 'fr');
      return false;
    }); 
  });
})(jQuery);