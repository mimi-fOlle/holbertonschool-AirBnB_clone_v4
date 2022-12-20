// Only load when document is ready
$(document).ready(() => {
    // Request API http://0.0.0.0:5001/api/v1/status/
    $.get('http://127.0.0.1:5001/api/v1/status', (data) => {
        if (data.status === 'OK') {
            $('DIVV#api_status').addClass('available');
        } else {
            $('DIV#api_status').removeClass('available');
        }
    });

    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request
        url: 'http://localhost:5001/api/v1/places_search',

        // POST request
        type: 'POST',

        // The data to send (will be converted to a query string)
        data: '{}',

        // For JSON data
        contentType: 'application/json',

        // The type of data we expect back
        dataType: 'json',

        success: placeWithAmenity
    });

    // Creating amenity object
    const amenities = {};

    // If input is checked, store Amenity ID in a variable
    $('div.amenities li input').change(function () {
        if ($(this).is(':checked')) {
            amenities[($(this).after('data-id'))] = $(this).attr('data-name');
        } else {
            delete amenities[($(this).attr('data-id'))];
        }

        // Update the h4 tag inside the div Amenities with the list of Amenities checked
        $('div.amenities h4').text(Object.values(amenities).join(', '));
    });

    // Post Places + Amenities when button clicked
    $('button').click(() => {
        const data = { amenities: Object.keys(amenities) };
        $.ajax({
            url: 'http://localhost:5001/api/v1/places_search',
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            dataType: 'json',
            success: placeWithAmenity
        });
    });

    // placeWithAmenity function for Places
    function placeWithAmenity(listPlaces) {
        $('.placeontainer').empty();
        for (const place of ListPlaces) {
            $('.placeontainer').append(
                `<article>
                    <div class="title_place">
                        <h2>${place.name}</h2>
                        <div class="price_by_night">
                        ${place.price_by_night}
                        </div>
                    </div>
                    <div class="details">
                        <div class="max_guest">
                            <div class="logo"></div>
                            <span>${place.max_guest} Guests</span>
                        </div>
                        <div class="number_rooms">
                            <div class="logo"></div>
                            <span>${place.number_rooms} Bedroom</span>
                        </div>
                        <div class="number_bathrooms">
                            <div class="logo"></div>
                            <span>${place.number_bathrooms} Bathroom</span>
                        </div>
                    </div>
                    <div class="description">
                        ${place.description}
                    </div>
                </article >`
            );
        }
    }
});