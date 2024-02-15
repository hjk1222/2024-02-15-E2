$(function(){

    //메뉴
    $(".main > li").mouseover(function(){
        $(this).find(".sub").stop().slideDown();
    })//
    $(".main > li").mouseout(function(){
        $(".sub").stop().slideUp();
    })//


    //슬라이드이미지(탑슬라이드)
    var n = 0; //0 1 2 (top 0, -600, -1200) 내가 정한 슬라이드 높이 값 만큼
    
    setInterval(function(){
        if(n < 2){
            n++;
        }else{
            n=0;
        }//
        console.log(n)

        pos = n * (-600) + "px";
        $(".top_move").animate( {top : pos },500)
        
    },3000)//
    
    


    //모달팝업
    $(".modal, .pop").hide();

    $(".p_click").click(function(){
        $(".pop , .modal").show();
    })//
    $(".close").click(function(){
        $(".pop, .modal").hide();
    })//

})//jquery
