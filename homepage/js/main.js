window.onload = function ()//监听
{
    //search功能
    byid("search_div").onmouseover = function () { if (byid('search_div').style.width != "450px") { byid('search_div').style.width = "350px"; }; };
    byid("search_div").onmouseout = function () { if (byid('search_div').style.width == "350px") { byid('search_div').style.width = "250px"; }; };
    //myfavorite功能
    byid("my_favorite_main").onmouseover = function () { byid('my_favorite_main').style.backgroundColor = "rgba(99, 96, 96,0.3)"; byid('box_add').style.opacity = "0.3"; byid("my_favorite_delete_botton").style.opacity = "0.4" };
    byid("my_favorite_main").onmouseout = function () { byid('my_favorite_main').style.backgroundColor = "rgba(99, 96, 96,0.04)"; byid('box_add').style.opacity = "0"; byid("my_favorite_delete_botton").style.opacity = "0" };
    byid("my_favorite_delete_botton").onmouseover = function () { byid("my_favorite_delete_botton").style.opacity = "0.4" };
    // byid("setting_icon").onmouseover=function(){byid("setting_icon_cube_2").style.transform="scale(1.1)";};
    // byid("box_add").onmouseover=function(){byid("box_add").style.opacity="0.8"};
    // my_favorite_delete_botton   box_add

    //获取背景图片
    byid("setting_backgroud_input_file").addEventListener('change', function () {
        var file = byid("setting_backgroud_input_file").files[0];
        if ((file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif')||file.size>3145728) {
            alert('图片格式必须为 JPEG PNG GIF 且不大于3M');
            return;
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            var data = e.target.result;
            byid('setting_select_backgroud_view').style.backgroundImage = 'url(' + data + ')';
            byid('search_backgroud').style.backgroundImage = 'url(' + data + ')';
            byid('backgroud_blur').style.backgroundImage = 'url(' + data + ')';
            localStorage.setItem("BackgroundPicture", data)
            // alert(data);

        };
        reader.readAsDataURL(file);
    }


    )
}

function byid(id)//获取id
{
    return document.getElementById(id);
}
setTimeout('ready()',10);
function ready()
{
    if (localStorage.getItem("low_performance") == '1')
     { byid("backgroud_blur").style.diaplay = "none"; byid("search_change_style_return").style.display = "block" } 
     my_favorite_load_data();
     set_background_picture()
}