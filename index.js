$(document).ready(function () {
    var hidden = false;
    $("#menu-burger").click(function () {
        if (hidden == false) {
            hidden = true;
            $(".nav-vertical").hide();
            $(".parent-container").css("margin-left","75px");
            $(".nav-vertical-responsive").css("display", "block");
        } else {
            hidden = false;
            $(".nav-vertical").show();
            $(".parent-container").css("margin-left","240px");
            $(".nav-vertical-responsive").css("display", "none");
        };

    });
});

