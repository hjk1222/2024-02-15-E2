$(function(){

    // 메뉴

    $(".main>li").hover(function(){
        $(this).children(".sub").stop().slideDown();
    },function(){
        $(".sub").stop().slideUp();
    })//

    // 탑슬라이드
    var n=0; //0(top:0) 1(top:-600) 2(top:-1200)

    setInterval(function(){
        if(n < 2){
            n++;
        }else{  
            n=0;
        }//
        console.log("n : " , n);
        pos = n * (-600) + "px";
        console.log("pos : " , pos);        
        $(".top_move").animate( {top : pos } , 500)
    }, 3000)//

    // 모달팝업
    $(".madal, .pop").hide();

    $(".p_click").click(function(){
        $(".madal, .pop").show();
    })//

    $(".close").click(function(){
        $(".madal, .pop").hide();
    })//


})//jquery