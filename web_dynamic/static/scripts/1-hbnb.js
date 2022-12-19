#!/usr/local/bin/node

const my_list = [];
$(document).ready() => {
  ($('input[type=checkbox]').change(function () {
    if (this.checked) {
      my_list[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete my_list[$(this).attr('data-id')];
    }
  }));
 });
