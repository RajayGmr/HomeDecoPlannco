$(document).ready(function(){
//Start Back to Top
$(".btn-backtotops").hide();
$(window).scroll(function(){
  let getscrolltop=$(this).scrollTop();
  if(getscrolltop>=370){
    $(".btn-backtotops").fadeIn(1000);
  }else{
    $(".btn-backtotops").fadeOut(1000);
  }
})
//End Back to Top

//  Start Header
       // Start nav
       $('.navbar').click(function(){
         $('.navbuttons').toggleClass('crossxs');
       });

       //for nav
       $(window).scroll(function(){

         let getscrolltop=$(this).scrollTop();
         //console.log(getscrolltop);
         if(getscrolltop>=200){
           $('.navbar').addClass("navmenus");
         }
         else {
           $('.navbar').removeClass('navmenus');
         }
       });


       // End nav
//  End Header

//Start Property
$(".Propertylists").click(function(){
  //for active item
  $(this).addClass("activeitems").siblings().removeClass("activeitems");

  //for filter
  let getattvalue=$(this).attr('data-filter');
  //console.log(getattvalue);
  if(getattvalue ==="all"){
    $(".filter").show("slide",500);
  }
  else{
   $(".filter").not("."+getattvalue).hide("slide",500);
   $(".filter").filter("."+getattvalue).show("slide",500);
}
});
//for image overlay (or lightbox2)
lightbox.option({
  showImageNumberLabel:false
})
//End Property

// Start Adv  Section
$(window).scroll(function(){
  let getscrolltop= $(this).scrollTop();
  if(getscrolltop>=900){
    $(".advimages").addClass("fromleft");
    $(".advtexts").addClass("fromright");

  }
  else{
    $(".advimages").removeClass("fromleft");
    $(".advtexts").removeClass("fromright");

  }
})
// End Adv Section

//Start footer Section
const getyear=$("#getyear");
const getfullyear=new Date().getUTCFullYear();
getyear.text(getfullyear);
//End footer Section
});
