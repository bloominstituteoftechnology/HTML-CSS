$(document).ready( () => {

    // fade in 
    $("#name").fadeIn(3000);
    $("#description").fadeIn("slow");
    $("#line-seperator").fadeIn(2000);

    $("#send-btn").click( () => {
        /*
        const subject = $("#subject-form").val();
        const content = $("#content-form").val();

        const mail_address = 'http://mailto:guyallenross@gmail.com?subject=' + subject + '&body=' + content;
        window.location.href = mail_address;
        */
        alert("silly goose.. i didn't finish.");
    });
    
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