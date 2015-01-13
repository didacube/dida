$(document).ready(function() {

    // Skip button transitions to the home page.
    $('button#skip').on('click', function() {
        removeSplash();
    });

    // Hide both panes, we'll selectively
    // show which one we want later.
    $('#home').hide();
    $('#splash').hide();

    // Check for user cookies.
    if (Cookie.test()) {

        // Returning User.
        if (Cookie.get('cookies')) {
            setTimeout(function() {
                $('#home').fadeIn(1000);
            }, 400);
        } else { // Previous User.
            Cookie.set('cookies', 'true');
            $('#splash').fadeIn(1000);
        }
    } else {
        $('#home').fadeIn(1000);
    }

    // Remove the splash dialog and fade
    // in the home page.
    var removeSplash = function() {
        $('#splash').fadeOut(1000);
        setTimeout(function() {
            $('#home').fadeIn(1000);
        }, 1400);
    };

    // Put an active class on the correct
    // link in the navbar.
    $('a[href^="' + window.location.pathname + '"]').addClass('active');
});
