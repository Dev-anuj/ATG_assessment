/*Anuj sharma */ */
var flw_btn = $(".flw-btn");

flw_btn.click(function () {

    $(this).toggleClass("flw-btn-active");

    if ($(this).text() == "Follow")
        $(this).text("Followed");
    else
        $(this).text("Follow");
});

$(".nav-item").click(function () {
    $(this).addClass("navActive").nextAll().removeClass("navActive");
    $(this).prevAll().removeClass("navActive");
});

var recmd_groups = $(".recmd-groups");
var joinGroup_tab = $("#joinGroup");
var leaveGroup_tab = $("#leaveGroup");
var JL_tab_cont = $("#join-leave");
var top_login = $("#login-link");
var top_loggedin = $("#logged-in");

$(".crt-btn, .signin-btn, .su-facebook, .su-google, .si-facebook, .si-google").click(function () {
    $(recmd_groups).css("display", "block");
});

$(".crt-btn, .signin-btn, .su-facebook, .su-google, .si-facebook, .si-google").click(function () {

    $(joinGroup_tab).css("display", "none");
    $(leaveGroup_tab).css("display", "block");
    $(JL_tab_cont).removeClass("join-group");
    $(JL_tab_cont).addClass("leave-group");

    $(top_login).removeClass("d-flex");
    $(top_login).addClass("d-none");

    $(top_loggedin).addClass("d-flex");
    $(top_loggedin).removeClass("d-none");

    $("#leave-mob").css("display", "block");
    $("#join-mob").css("display", "none");
});

$(leaveGroup_tab, top_loggedin).click(function () {

    $(JL_tab_cont).addClass("join-group");
    $(JL_tab_cont).removeClass("leave-group");
    $(joinGroup_tab).css("display", "block");
    $(leaveGroup_tab).css("display", "none");
    $(recmd_groups).css("display", "none");

    $(top_login).removeClass("d-none");
    $(top_login).addClass("d-flex");

    $(top_loggedin).removeClass("d-flex");
    $(top_loggedin).addClass("d-none");

});

$("#leave-mob").click(function () {
    $(this).css("display", "none");
    $("#join-mob").css("display", "block");
});