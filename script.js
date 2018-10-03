$(()=>{
   var cover=$('.project-container');
   var navbar=$('.home-bar');
   //Scoller
   var nOffset =$(navbar).offset().top;
   var aOffset= $(cover).offset().top;
   if(nOffset>=aOffset-50)
     {
        $(navbar).css('background-color','black').fadeTo("slow","1");      
     }
     else{
        $(navbar).css('background-color','rgba(0,0,0,0)');      
     }
   $(window).scroll(()=>{
     var nOffset =$(navbar).offset().top;
     var aOffset= $(cover).offset().top;
     if(nOffset>=aOffset-50)
      {
        $(navbar).css('background-color','black').css('transition','background 1s');      
      }
      else{
        $(navbar).css('background-color','rgba(0,0,0,0)').css('transition','background 0s');      
      }  
    })
    //card-color-change   
    
})
