let crsr = document.querySelector("#cursor");
let crsrblur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    crsrblur.style.left = dets.x - 110 + "px"
    crsrblur.style.top = dets.y - 110 + "px"

})



gsap.to("#nav", {
    backgroundColor:"#000",
    duration: 0.5,
    height: "120px",
    scrollTrigger:{
        trigger:"#nav",
        // markers: true,
        scroller: "body",
        start:"top -10%",
        end:"bottom -11%",
        scrub: 1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -75%",
        scrub: 1.5
    }
})

let navh = document.querySelectorAll(".head");
navh.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3
        crsr.style.border= "1px solid white"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border= " 0px solid #95c11e"
        crsr.style.backgroundColor = "#95c11e"
    })
})

gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    // stagger:0.4 -- it use for the one by one coming element
    scrollTrigger:{
        trigger:"#about-us",
        scroll:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:2 ,
    }
})

gsap.from(".cards",{
    scale:0.5,
    opacity:0,
    duration:1,
    // stagger:0.4 -- it use for the one by one coming element
    scrollTrigger:{
        trigger:".cards",
        scroll:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2 ,
    }
})
gsap.from("#logo1",{
    y:-70,
    x:-70,
    // stagger:0.4 -- it use for the one by one coming element
    scrollTrigger:{
        trigger:"#logo1",
        scroll:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4 ,
    }
})
gsap.from("#logo2",{
    y:70,
    x:70,
    // stagger:0.4 -- it use for the one by one coming element
    scrollTrigger:{
        trigger:"#logo1",
        scroll:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4 ,
    }
})

gsap.from("#page4 h1",{
    y:-30,
    // stagger:0.4 -- it use for the one by one coming element
    scrollTrigger:{
        trigger:"#page4 h1",
        scroll:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3 ,
    }
})