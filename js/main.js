const maxDistance = 400;   // max distance to the scroll events
const minDistance = -1;    // min distance to the scroll events

$(document).ready( () => {

    // fade in 
    $("#name").fadeIn(3000);
    $("#description").fadeIn("slow");
    $("#line-seperator").fadeIn(2000);

    // scroll events
    $(window).on('scroll', () => {
        
        // home nav 

        
        // line-sections 
        const elementsToCheck = ["#line-about-me", "#line-skills", "#line-projects"];
        const elementsNavAnch = ["#about-anc", "#skills-anc", "#projects-anc"];
        let elementsBinary = [false, false, false];

        for (let i = 0; i < elementsToCheck.length; i++)
        {
            const isElementClose = isClose(elementsToCheck[i]);

            if(isElementClose && elementsBinary[i] === false)
            {
                $(elementsNavAnch[i]).css("color", "white");
                $(elementsNavAnch[i]).css("font-weight", "bold");

                $(elementsToCheck[i]).css("background-color", "rgb(255, 168, 93)");

                elementsBinary[i] = true;
            }
            else
            {
                $(elementsNavAnch[i]).css("color", "#337ab7");
                $(elementsNavAnch[i]).css("font-weight", "300");
                $(elementsToCheck[i]).css("background-color", "rgb(165, 165, 165)");

                elementsBinary[i] = false;
            }
        }

    });
    

    // button event
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

// function for checking the disctance from the element
function isClose(element)
{
    let scrollTop = $(window).scrollTop();
    let elementOffset = $(element).offset().top;
    
    const distance = (elementOffset - scrollTop);

    return distance < maxDistance && distance > minDistance;
}


// easy pie-js
$(function() {
    $('.chart').easyPieChart({
        easing: 'easeOutBounce',
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        },
        barColor: "#FFA85D",
        size: 110,
        lineWidth: 5,
        scaleLength: 7,
        trackWidth: 5
    });

});

