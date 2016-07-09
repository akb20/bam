$(function() {
    $("#logo").click(function() {
        $(this).addClass("flip animated").one('animationend webkitAnimationEnd oAnimationEnd', function() {
            $(this).removeClass();
        });
    });
});
