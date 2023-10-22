// const scroll = new LocomotiveScroll({
//   el: document.querySelector('.main'),
//   smooth: true
// });

function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco();

// ------------------------------------
var timerout;

function cursor(xScale,yScale){
  window.addEventListener("mousemove",function(dets){
    // document.querySelector(".main-cursor").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(${xScale},${yScale})`;
    document.querySelector(".main-cursor").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
  })
}

cursor()


// function cursorChatpat(){
//     var xScale = 1;
//     var yScale = 1;

//     var xPriv = 0;
//     var yPriv = 0;

//   window.addEventListener("mousemove",function(dets){
//     clearTimeout(timerout);
//     var xdiff = dets.clientX -  xPriv;    
//     var ydiff = dets.clientY -  yPriv;    

//     xScale = gsap.utils.clamp(.8, 1.2, xdiff);
//     yScale = gsap.utils.clamp(.8, 1.2, ydiff);


//     xPriv = dets.clientX;
//     yPriv = dets.clientY;

//     // console.log(xdiff,ydiff);

//   cursor(xScale,yScale);
  
//   timerout=setTimeout(function(){
//    document.querySelector(".main-cursor").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
//   },1000);

    
//   })
// }

// cursorChatpat()
// ---------------------------------------


// ------------------------------------------------------------------
// -----Image Effect..........................

document.querySelectorAll(".ele").forEach(function(ele){
  // console.log(ele)
  var rotate = 0;
  var diffrot = 0;

  ele.addEventListener("mousemove",(dets)=>{

    var diff = dets.clientY - ele.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;

    gsap.to(ele.querySelector("img"),{
      opacity:1,
      left:dets.clientX,
      rotate:gsap.utils.clamp(-30,20,diffrot * 0.8),
    })
  })

  ele.addEventListener("mouseleave",(dets)=>{
    gsap.to(ele.querySelector("img"),{
      opacity:0,
    })
    
  })
})



// -------------------------------
// ------------------------------






// ---------------------------------------------------------------------
// ----------------------------------------------------------------------
gsap.from(".home-page .nav>.nav-left>h4",{
  y:-50,
  opacity:0,
  duration:1.5,
  ease:Expo.easeInOut
})
gsap.from(".home-page .nav>.nav-right>h4",{
  y:-50,
  opacity:0,
  duration:1.5,
  ease:Expo.easeInOut
})

gsap.from(".home-page .cont-heading>.head :nth-child(1)",{
  y:50,
  opacity:0,
  duration:1.2
})
gsap.from(".home-page .cont-heading>.head :nth-child(2)",{
  y:50,
  opacity:0,
  duration:1.2
})
gsap.from(".home-page .cont-heading #inner>h2",{
  x:300,
  opacity:0,
  duration:1.2
})

gsap.from(".home-page .small-head>h3",{
  x:-50,
  y:-50,
  opacity:0,
  duration:1.5
})

gsap.from(".home-page .home-footer>h4",{
  y:-50,
  opacity:0,
  duration:3,
  delay:-1,
  ease:Expo.easeInOut
})

gsap.from(".home-page #cir>.circle",{
  y:-70,
  opacity:0,
  duration:1.8
})
