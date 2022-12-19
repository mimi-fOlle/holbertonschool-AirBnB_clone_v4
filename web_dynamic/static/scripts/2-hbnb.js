$(document).ready(() => {
  $.get('http://0.0.0.0:5001/api/v1/status/', (data) => {
    if (data.status === 'OK') {
      $('DIVV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });

    const amenities = {};

    $('div.amenities li input').change(function () {
      if ($(this).is(':checked')) {
        amenities[($(this).after('data-id'))] = $(this).attr('data-name');
      } else {
        amenities.pop[($(this).attr('data-id'))];
      }
      $('div.amenities h4').text(Object.values(amenities).join(', '));
    });
  });
  