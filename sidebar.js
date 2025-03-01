$(document).ready(function() {
    $('.toggle-btn').click(function() {
        $('.sidebar').toggleClass('hidden');
        if ($('.sidebar').hasClass('hidden')) {
            $('.toggle-btn i').removeClass('left').addClass('right');
        } else {
            $('.toggle-btn i').removeClass('right').addClass('left');
        }
    });
});
