const scroll = new LocomotiveScroll({
  // el: document.querySelector("[data-scroll-container]"),
  // smooth: true,
  // tablet: { smooth: true },
  // smartphone: { smooth: true },
});
scroll.on("scroll",()=>{
});
gsap.to("span", { 
  rotation: 360,
  duration: 2,
  repeat: 3,
  repeatDelay: 2,
  ease: 'none'
})

gsap.to(".icons", { 
  rotation: 360,
  duration: 2,
  repeat: 2,
  repeatDelay: 2,
  ease: 'none'
})
  
  // gsap.to(".icons", { 
  //   rotation: 360,
  //   duration: 2,
  //   repeat: -1,
  //   repeatDelay: 2,
  //   ease: 'bounce.out'
  // });
  

// }
// )
// gsap.fromTo("h2",{ rotation : 360 , x : 10 , yPourcent : 50 })