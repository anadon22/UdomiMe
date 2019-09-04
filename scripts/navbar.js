$(document).ready(function(){
  /* Demo purposes only */
   $(".hover").mouseleave(
     function () {
       $(this).removeClass("hover");
     }
   );
    // $(".xbutton").click(function(e){
    //
    //   var x = document.get('.xbutton');
    //    if (x.style.display === "block") {
    //      x.style.display = "none";
    //    } else {
    //      x.style.display = "block";
    //    }
    //
    // 
    //   if($(".xbutton").text() == "🞬"){
    //     $(".xbutton").text("☰");
    //   }else{
    //     $(".xbutton").text("🞬");
    //   }
    //   $(".li").toggle("fast");
    //
    // });

/*fast
    var nav = document.getElementById('main_nav'),
    li = document.getElementsByClassName('navlink');

    nav.addEventListener('click', function(e) {
        li.className = li.className? 'hidden' : 'navlink';
        e.preventDefault();
    });
    */
});
