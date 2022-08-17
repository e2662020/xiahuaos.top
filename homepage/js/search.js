function search_change_style()//点击搜索框时进行的改变
{
    byid('search_backgroud').style.transform = " scale(1.2)";
    // document.getElementById('search_backgroud').style.filter = "blur(5px)";
    // document.getElementById('search_backgroud').style.transform=" scale(1.1)";
    byid('search_div').style.width = "450px";
    // document.getElementById('search_div').style.pointerEvents="none";
    byid('backgroud_blur').style.opacity = "0.9";
    byid('backgroud_blur').style.transform = "scale(1.2)";
    // document.getElementById('search_div').style.left="30%";
    byid('Myfavorite').style.opacity = "0";
    setTimeout(function () { byid('Myfavorite').style.display = "none"; }, 300);
    // byid("MYfavorite").style.transform="scale(1.5)";
    byid("Myfavorite").style.transform = "translateX(-50%) scale(1.1) ";

    byid("search_change_style_return").style.display = "block";//低性能模式专用
}
function search_change_style_return()//取消搜索，变回原来的样式
{
    // document.getElementById('search_backgroud').style.filter = "blur(0px)";
    byid('search_backgroud').style.transform = " scale(1.0)";
    byid('search_div').style.width = "250px";
    // document.getElementById('search_div').style.pointerEvents="auto";
    byid('backgroud_blur').style.opacity = "0";
    byid('backgroud_blur').style.transform = "scale(1.0)"
    byid('Myfavorite').style.display = "block";
    if (byid("Myfavorite").style.transform != "translateX(-50%) scale(0.9)") { setTimeout(function () { byid('Myfavorite').style.opacity = "1"; byid("my_favorite_main").style.transform = "translateX(-50%) scale(1.0)"; }, 50) };
    // byid('Myfavorite').style.opacity="1";
    // byid('my_favorite').style.transition="6s";
    // document.getElementById('search_div').style.left="45%";
    // byid("my_favorite_main").style.transform="translateX(-50%) scale(1.0)";
    // byid("MYfavorite").style.transform="translateX(-50%) scale(1.0)";
    byid("search_change_style_return").style.display = "none";//低性能模式专用
}

