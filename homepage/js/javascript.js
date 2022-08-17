
var backgroud = 0;


//if(file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {alert('不是有效的图片文件!');return;}

function mouse_onlick(event)//识别点击的按键，已经废弃
{

    var temp = event.button;
    // alert(temp);
    if (temp == 1) {
        my_favorite_input_open();
    } if (temp == 2) {
        window.localStorage.clear;
        location.reload();
    }
    setTimeout(function () { if (temp == 1) { my_favorite_delect_show() } }, 2000);
}
function byid(id)//获取id
{
    return document.getElementById(id);
}


// function my_favorite_add()
// {
//     byid('my_favorite_main').innerHTML+='<div class="my_favorite_box" style="display:none" id="box_'+(box_num+1)+'"></div>';
//     box_num=box_num+1;
// }


function my_favorite_page(page)//已废弃
{
    temp = Math.min((page - 1) * 10 + 10, box_num)
    for (i = (page - 1) * 10 + 1; i <= temp; i++) {
        byid('box_' + i).style.display = "block";
    }
}





function test_flash_all()//测试用，恢复默认
{

    window.localStorage.clear();
    location.reload();
}
