/**
 * Created by Administrator on 2015/11/7.
 */
$().ready(function(){
    $("table tr:nth-child(odd)").addClass("striped");
    $( "#datepicker" ).datepicker();
    var $navA = $('.nav a');
    console.log($navA.length);
    if($navA){
        $navA.click(function(){
            for(var i = 0; i < $navA.length; i++){
                if(!$navA.eq(i).hasClass('btn_default')){
                    !$navA.eq(i).addClass('btn_default');
                }
                $(this).removeClass('btn_default');
            }
        });
    }
})