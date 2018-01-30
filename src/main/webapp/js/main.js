$(document).ready(function () {
    $("#header").load("inc/header.html");
    $("#content").load("content.html");

});
var mainHelper = {};

mainHelper.gotoUrl = function (url) {
    $("#content").load(url);
}