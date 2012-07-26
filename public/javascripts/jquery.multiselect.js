/*
  This is a work in progress.
  This is an attempt to do a bootstrap-like structure instead of the jquery-ui-like one.
  Not sure we will gain perf or code lisibility.
*/

!function ($) {

  var MultiSelect = function (select, options) {
    this.init($(select), options)
  }

  $.fn.multiselect = function (option) {
    return this.each(function () {
      var $this = $(this), 
          data = $this.data('multiselect'),
          options = $.extend({}, $.fn.multiselect.defaults, $this.data(), typeof option == 'object' && option);

      if (!data) $this.data('multiselect', (data = new MultiSelect(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }


  MultiSelect.prototype = {

    constructor: MultiSelect,

    init: function (select, options) {
      select.css('position', 'absolute').css('left', '-9999px');
      var container = $('<div id="ms-'+select.attr('id')+'" class="ms-container"></div>'),
          selectableContainer = $('<div class="ms-selectable"></div>'),
          selectedContainer = $('<div class="ms-selection"></div>'),
          selectableUl = $('<ul class="ms-list"></ul>'),
          selectedUl = $('<ul class="ms-list"></ul>');

      selectableContainer.append(selectableUl);
      selectedContainer.append(selectedUl);
      container.append(selectableContainer);
      container.append(selectedContainer);
      select.after(container);
    },

    select: function(){
      var that = this;

      console.log(that);
    }

  }

  $.fn.multiselect.defaults = {
    test: true
  }

  $.fn.multiselect.Constructor = MultiSelect
}(window.jQuery);