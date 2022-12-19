$(document).ready(() => {
    const my_list = [];
    ($('input[type=checkbox]').change(function () {
      if (this.checked) {
        my_list[$(this).attr('data-id')] = $(this).attr('data-name');
      } else {
        my_list.pop[$(this).attr('data-id')];
      }
      $('div.my_list h4').text(Object.values(my_list).join(', '));
    }));
  });
  