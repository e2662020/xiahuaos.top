var box_num = 0;//目前收藏夹中总收藏夹个数
var delect_status = 0;//是否开启了编辑模式
function my_favorite_load(num, box_url, box_name, box_picture)//网页中插入收藏的网页，被调用
{
    // byid('my_favorite_main').innerHTML+='<a href="'+box_url+'"><div class="my_favorite_box"  id="box_'+num+'"><img class="my_favorite_logo"  src="'+box_picture+'"><div class="my_favorite_name"   style=" text-align:center">'+box_name+'</div></img></div></a>';
    // byid('my_favorite_main').innerHTML+='<a href="'+box_url+'" ><div class="my_favorite_box" id="box_'+num+'" ><img class="my_favorite_logo" src="'+box_picture+'"><div class="my_favorite_name" style=" text-align:center">'+box_name+'</div><div class="my_favorite_delete" onclick=my_favorite_delect('+num+')>x</div></div></a>';
    byid('my_favorite_main').innerHTML += '<div class="my_favorite" id="box_' + num + '"><a href="' + box_url + '" ><div class="my_favorite_box"   ><img class="my_favorite_logo" src="' + box_picture + '"><div class="my_favorite_name" style=" text-align:center">' + box_name + '</div></div></a><div class="my_favorite_delete" id="my_favorite_delete_' + num + '" onclick=my_favorite_delect(' + num + ')>x</div></div>'
}
function my_favorite_save_data(name, url, picture)//保存收藏的网页，被调用
{
    box_num = (Number(box_num) + 1);
    localStorage.setItem("data_num", box_num);
    localStorage.setItem("box_" + box_num + "_name", name);
    localStorage.setItem("box_" + box_num + "_url", url);
    localStorage.setItem("box_" + box_num + "_picture", picture);

}
function my_favorite_load_data()//读取收藏的网页
{
    // var data=localStorage.getItem("data_num");
    // alert(data+"");
    if (localStorage.getItem("data_num")) {
        box_num = localStorage.getItem("data_num");
        for (i = 1; i <= box_num; i++) {
            box_url = localStorage.getItem("box_" + i + "_url");
            box_name = localStorage.getItem("box_" + i + "_name");
            box_picture = localStorage.getItem("box_" + i + "_picture");
            my_favorite_load(i, box_url, box_name, box_picture);
        }
    }
    byid('my_favorite_main').innerHTML += '<div class="my_favorite"><div class="my_favorite_box" id="box_add" onclick=my_favorite_input_open()><div id="my_favorite_add_x"><div id="my_favorite_add_y"></div></div></div></div>';
}
function my_favorite_input_close()//关闭添加收藏页的窗口
{
    byid("my_favorite_input_close").style.display = "none";
    byid("my_favorite_main").style.pointerEvents = "auto";
    byid('my_favorite_input').style.opacity = "0.5";
    byid("my_favorite_input").style.transform = "translateX(-50%) rotateY(90deg)";
    setTimeout(function () { byid('my_favorite_input').style.display = "none"; }, 300);
    byid('my_favorite_main').style.opacity = "1";
    byid("my_favorite_main").style.transform = "translateX(-50%) scale(1.0)";
    byid('my_favorite_input_form_text_1').value = "";
    byid('my_favorite_input_form_text_2').value = "";
}
function my_favorite_input_open()//打开收藏页的窗口
{
    byid("my_favorite_input_close").style.display = "block";
    byid("my_favorite_main").style.pointerEvents = "none";
    byid('my_favorite_input').style.display = "block";
    setTimeout(function () { byid("my_favorite_input").style.transform = "translateX(-50%) rotateY(0deg)" }, 50);
    setTimeout(function () { byid('my_favorite_input').style.opacity = "1"; }, 50);
    byid('my_favorite_main').style.opacity = "0.5";
    byid("my_favorite_main").style.transform = "translateX(-50%) scale(0.9)";
}
function my_favorite_input_ok()//添加收藏页的确认按钮
{
    var temp_name = byid('my_favorite_input_form_text_1').value;
    var temp_url = byid('my_favorite_input_form_text_2').value;
    var temp_picture = temp_url + "/favicon.ico";
    if (temp_name == "" || temp_url == "") {
        byid('my_favorite_input_form_text_1').value = "";
        byid('my_favorite_input_form_text_2').value = "";
        my_favorite_input_close();
    }
    else {
        my_favorite_save_data(temp_name, temp_url, temp_picture);
        location.reload() = function () {
            my_favorite_load_data();
            my_favorite_input_close();
        }
    }
}
function my_favorite_delete_show()//打开收藏页的删除按钮
{
    if (delect_status == 1) {
        // alert("321");
        // document.getElementsByClassName('my_favorite_delete').style.display="none";
        for (i = 1; i <= box_num; i++) {
            byid('my_favorite_delete_' + i + '').style.display = "none";
        }
        byid("box_add").style.display = "block";
        byid('my_favorite_delete_botton_text').innerHTML = '编辑';
        delect_status = 0;
        location.reload();
    }
    else {
        // alert("123");
        // document.getElementsByClassName('my_favorite_delete').style.display="block";
        for (i = 1; i <= box_num; i++) {
            byid('my_favorite_delete_' + i + '').style.display = "block";
        }
        byid("box_add").style.display = "block";
        byid('my_favorite_delete_botton_text').innerHTML = '完成';
        delect_status = 1;
    }
}
function my_favorite_delect(del_num)//删除特定标签页
{
    window.localStorage.removeItem("box_" + del_num + "_url");
    window.localStorage.removeItem("box_" + del_num + "_name");
    window.localStorage.removeItem("box_" + del_num + "_picture");
    for (i = (del_num + 1); i <= box_num; i++) {
        // temp_url=localStorage.getItem("box_"+i+"_url");
        // temp_name=localStorage.getItem("box_"+i+"_name");
        // temp_picture=localStorage.getItem("box_"+i+"_picture");
        localStorage.setItem("box_" + (i - 1) + "_name", localStorage.getItem("box_" + i + "_name"));
        localStorage.setItem("box_" + (i - 1) + "_url", localStorage.getItem("box_" + i + "_url"));
        localStorage.setItem("box_" + (i - 1) + "_picture", localStorage.getItem("box_" + i + "_picture"));
    }
    window.localStorage.removeItem("box_" + box_num + "_url");
    window.localStorage.removeItem("box_" + box_num + "_name");
    window.localStorage.removeItem("box_" + box_num + "_picture");
    box_num = (Number(box_num) - 1);
    localStorage.setItem("data_num", box_num);
    byid("box_" + del_num).style.display = "none";

}