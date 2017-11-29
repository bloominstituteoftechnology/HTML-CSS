$(document).ready( () => {

    // fade in 
    $("#name").fadeIn(3000);
    $("#description").fadeIn("slow");
    $("#line-seperator").fadeIn(2000);
    
});


$(function() {
    $('.chart').easyPieChart({
        easing: 'easeOutBounce',
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
    var chart = window.chart = $('.chart').data('easyPieChart');
    $('.js_update').on('click', function() {
        chart.update(Math.random()*200-100);
    });
});