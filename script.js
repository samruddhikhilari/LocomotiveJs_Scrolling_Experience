function bodyScroller(){
    const scroll = new LocomotiveScroll({
    el: document.querySelector(".data-scroll-container"),
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