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

function page2Loader(){
    
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
}
page2Loader();

function page3Loader(){

  let data =[
    {
      img:"https://i.pinimg.com/736x/09/c2/c4/09c2c41d9326651b6073c41c876bef4f.jpg",
      id:1,
    },
    {
      img:"https://i.pinimg.com/736x/24/fd/b2/24fdb2d93c75cb58b302d4b34e043733.jpg",
      id:2,
    },
    {
      img:"https://i.pinimg.com/736x/38/3d/3f/383d3fb574c987434680064f558755d4.jpg",
      id:3,
    },
    {
      img:"https://i.pinimg.com/736x/38/12/23/381223f9be5fc3627ea8a67720906ecb.jpg",
      id:4,
    },
    {
      img:"https://i.pinimg.com/736x/8c/7e/2f/8c7e2f44c4d84f060498ea91455214b6.jpg",
      id:5,
    },
    {
      img:"https://i.pinimg.com/736x/31/40/ac/3140ac6b18a8dcad84d0c941dab9b1db.jpg",
      id:6,
    },
    {
      img:"https://i.pinimg.com/736x/c2/0b/93/c20b93cdcd32d90ffbc3cfb31a0b0cb1.jpg",
      id:7,
    },
    {
      img:"https://i.pinimg.com/736x/a3/a8/98/a3a898165326a356ff19207e105b00c1.jpg",
      id:8,
    },
    {
      img:"https://i.pinimg.com/736x/5c/28/67/5c286753efb6092d3c3561ae33519b62.jpg",
      id:9,
    },
    {
      img:"https://i.pinimg.com/736x/47/a9/ec/47a9ec376376663ab7910b423024c05e.jpg",
      id:10,
    }
  ];

  var clutter="";
  data.forEach(function(e){
    
   clutter += ` <div id="image">
            <img
              src="${e.img}"
              alt="" id="${e.id}"
            />
            <div id="overlay">
              <h1>think good , get returns fine</h1>
            </div>
          </div>`;
  })

  document.querySelector("#img_container").innerHTML=clutter;
  console.log(clutter);
}
page3Loader();