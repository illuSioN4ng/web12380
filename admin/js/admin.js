/**
 * Created by Administrator on 2015/11/7.
 */
$().ready(function(){
    $("table tr:nth-child(odd)").addClass("striped");
    $( "#datepicker" ).datepicker();
})