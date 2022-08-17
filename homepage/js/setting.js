var backgroud = 0;

function main_setting_open() {
    byid("main_setting_select").style.display = "block";
    setTimeout(function () { byid("main_setting_select").style.transform = "scale(1.0)"; }, 10);
    setTimeout(function () { byid("main_setting_close").style.display = "block"; }, 100);
    byid("setting_icon").style.backgroundColor="rgb(121, 121, 121,1)";
    setTimeout(function(){byid("setting_icon").style.transform="translateX(-100%) rotate(120deg)"},20);
    byid("setting_icon").style.opacity="0.8";


}
function main_setting_close() {
    byid("main_setting_select").style.transform = "scale(0)";
    setTimeout(function () { byid("main_setting_select").style.display = "none"; }, 100);
    setTimeout(function () { byid("main_setting_close").style.display = "none"; }, 100);
    byid("setting_icon").style.backgroundColor="rgb(121, 121, 121,0)";
    byid("setting_icon").style.transform="translateX(-100%) rotate(0deg)";
    byid("setting_icon").style.opacity="0.5";
    // alert("1");
}
function change_backgroud_open() {
    show_setting_window_public();
    main_setting_close();
}
function more_setting() {
    alert("开发中，即将完成");
}
function about_this_website() {
    alert("还没写，回头在写");
}
function setting_low_performance() {
    localStorage.setItem(low_performance, '1');
}
function show_setting_window_public() {
    byid("setting_change_window_public").style.display = "block";
    setTimeout(function () { byid("setting_change_window_public").style.transform = "translateX(-50%) rotateY(0deg)"; }, 20);
    byid("close_setting_change_window").style.display = "block";
}
function close_setting_change_window() {
    byid("setting_change_window_public").style.transform = "translateX(-50%) rotateY(90deg)";
    setTimeout(function () { byid("setting_change_window_public").style.display = "none"; }, 1000);
    byid("close_setting_change_window").style.display = "none";
}
// function setting_backgroud_input_file() {
//     //var data = e.target.result;
//     //alert(e);
//     var file = byid('setting_backgroud_input_file').files[0];
//     alert(file.name);
// }
function set_background_picture()
{   var data=localStorage.getItem("BackgroundPicture");
    byid('setting_select_backgroud_view').style.backgroundImage = 'url(' + data + ')';
    byid('search_backgroud').style.backgroundImage = 'url(' + data + ')';
    byid('backgroud_blur').style.backgroundImage = 'url(' + data + ')';
}