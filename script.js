function bodyScroller(){
    const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true
});
}

function loaderEffect() {

 var tl = gsap.timeline();

  tl.to("#yellow1",{
    y:"-300px",
    opacity:0,
    duration:.5,
    ease:"power-out"
  });

  tl.to("#loader h1 span", {
    opacity: 0,
    scale: 0,
    duration: 1,
    ease: Power1,
    stagger:1,
  });

  // tl.to("#yellow2",{
  //   y:0,
  //   opacity:1,
  //   duration:.5,
  //   ease:"power-in"
  // });

  tl.to("#loader",{
    y:"-400px",
    opacity:0,
    duration:.5,
    color:"black",
    onComplete:()=> {
        document.querySelector("#loader").style.display="none";
        document.querySelector("#main").style.display="block";
        bodyScroller();
    }
  });

   tl.from("#page1 h1 span", {
    opacity: 0,
    scale: 0,
    duration: 1,
    ease: Power1,
    stagger:1,
  });

}

loaderEffect();

document.querySelector("#page2").addEventListener("mouseenter",function(){
    
  var ele = document.querySelectorAll(".ele");
  ele.forEach(function(e){
    e.addEventListener("mouseenter",function(det){
      document.querySelector("#page2").style.backgroundImage=`url('${det.target.getAttribute("data-img")}')`;
    })
  })
});

document.querySelector("#page2").addEventListener("mouseleave",function(){
  document.querySelector("#page2").style.backgroundImage='url("https://i.pinimg.com/736x/0f/69/39/0f6939ca4e265db250f2598a4679f4b9.jpg")';  
});