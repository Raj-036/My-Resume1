$(document).ready(function() {
    $('nav ul li a').each(function() {
        if (this.href == window.location.href) {
            $(this).addClass('active');
        }
    });
});