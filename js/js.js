//下拉
$("#select .s1").live("click",function(){ 
    var ul = $(this).next("ul"); 
    if(ul.css("display")=="none"){ 
        ul.slideDown("fast"); 
    }else{ 
        ul.slideUp("fast"); 
    } 
});

$("#select ul li").live("click",function(){ 
    var txt = $(this).children("a").text();
    var ul = $(this).closest("ul");
    var p = $(ul).parent().children("p");
    p.html(txt); 
    ul.hide();
}); 

//注册
$(function(){
    $("#next").click(function(){
        $("#body-left").hide();
        $("#body-middle").show();
    })
    $("#save").click(function(){
        $("#body-middle").hide();
        $("#body-right").show();
    })
})

//tabs
$(document).ready(function(){
    $("#content ul").hide(); 
    $("#tabs li:first").attr("id","current");
    $("#content ul:first").fadeIn(); 
    
    $('#tabs a').click(function(e) {
        e.preventDefault();        
        $("#content ul").hide(); 
        $("#tabs li").attr("id",""); 
        $(this).parent().attr("id","current"); 
        $('#' + $(this).attr('title')).fadeIn(); 
    });
});

//个人中心 菜单

$(document).ready(function(){
    $("#mn-tabs>div").hide(); 
    $(".tab-list a:first").attr("id","current-menu");
    $("#mn-tabs>div:first").show(); 
    
    $('.tab-list a').click(function(e) {
        e.preventDefault();        
        $("#mn-tabs>div").hide(); 
        $(".tab-list a").attr("id",""); 
        $(this).attr("id","current-menu"); 
        $('.' + $(this).attr('title')).show(); 
    });
});

//认证
$(function(){
    $("#reg").click(function(){
        $("#body-left-reg").hide();
        $("#body-middle-reg").show();
    })
    $("#save").click(function(){
        $("#body-middle-reg").hide();
        $("#body-right-reg").show();
    })
})

//tabs
$(document).ready(function(){
    $(".id-content > div").hide(); 
    $(".id-tabs li:first").attr("id","current");
    $(".id-content div:first").show(); 
    
    $('.id-tabs a').click(function(e) {
        e.preventDefault();        
        $(".id-content > div").hide(); 
        $(".id-tabs li").attr("id",""); 
        $(this).parent().attr("id","current"); 
        $('#' + $(this).attr('title')).show(); 
    });
});

