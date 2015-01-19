$(document).ready(function() {

    // Skip button transitions to the home page.
    $('button#skip').on('click', function() {
        removeSplash();
    });

    // Hide both panes, we'll selectively
    // show which one we want later.
    $('#home').hide();
    $('#splash').hide();

    if (window.localStorage.splash == undefined || window.localStorage.splash == false) {
        $('#splash').show();
        window.localStorage.setItem("splash", true);
    } else {
        $('#home').show();
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
