/* global $ */
$(function () {
    "use strict";
    $(".information ul li").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
        $(".information .info div").hide();
        $("." + $(this).data("class")).fadeIn();
    });
});