"use strict"

$(document).ready(function(){

    $(".invisible").css("visibility", "hidden");

    $("dd").addClass("invisible");

    $('.toggle-link').click(function(event) {
        event.preventDefault();
        $("dd").toggleClass('invisible');
    });


})