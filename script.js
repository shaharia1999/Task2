$(document).ready(function(){
    const img1='./images/define.jpg'
    const img2='./images/design.jpg'
    const img3='./images/implement.jpg'
    const img4='./images/maintain.jpg'
    const img5='./images/plan.jpg'
    const img6='./images/test.jpg'

    const pic=document.querySelector('.gelary-pic');
    const imgs=[img1,img2,img3,img4,img5,img6]
    const ul=document.querySelector('ul');
    const contents=["DEFINE","PLAN","DESIGN"," IMPLEMENT","TEST","MAINTAIN"];
// control loop
    let count=0;
    setInterval(function(){
        if(count <contents.length){
          $('#img').html(`<img  class="gelary-pic" src=${imgs[count]}  >`)
          let li=document.createElement("li"); 
          $("li").addClass("li1");
          $("#ul").append(li);
          li.innerText=contents[count];
          $('li').attr('data-aos', 'zoom-in');
          count++ ;
        }
        else if(count >= contents.length){
          count=0;
          $('#img').html('');
          $("#ul").html('');
        }   
    },5000)
  
})
