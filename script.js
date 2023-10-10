function timelineone(){
    var tl= gsap.timeline({
        scrollTrigger:{
            trigger: "#home",
            start: "top top",
            scrub: 1,
            // markers :true,
            pin: true,
            end: "bottom -250%"
        }
    })
    
    tl
        .to("#circle #btm img",{
            scale: 1,
            rotate: "-180deg",
            duration: 1,
            stagger: .1,
            ease: Power1
        },"harsha")
        .to("#circle #top img",{
            scale: 1,
            duration: 1,
            stagger: .1,
            ease: Power1
        },"harsha")
        .to("#cimage img",{
            scale: "0",
            duration: 1,
            stagger: .1,
            ease: Power1
        },"harsha")
        .to("#centerimg h5",{
            opacity:"0",
            duration: 1,
            stagger: .1,
            ease: Power1
        },"harsha")
        .to("#circle",{
            scale: .6,
            duration:2,
            ease: Power1
        },"harsha")
        .to("#overlay >h1#gallery",{
            bottom:"-50%",
            ease: Power1
        },"harsha")
        
        .to("#gola",{
            top:"50%",
            scale:2,
            ease: Power1
        },"harsha")
        .to("#gola",{
            opacity:0,
            duration:2.2,
            ease: Power1
        },"harsha2")
        .to("#smcircle",{
            scale: 0,
            duration:2,
            ease: Power1
        },"harsha2")
        .to("#circle",{
            scale: 0,
            ease: Power1
        },"harsha2")
        .to("#overlay>h1#pf",{
            rotate:0,
            bottom:"2%",
            ease: Power1
        },"harsha2")
        .to("#pinkpart",{
            top: 0,
            duration:5,
            ease: Power1
        },"harsha2")
        .to("#pinkpart",{
            top: "-50%",
            duration:3,
            ease: Power1
        },)
        
}
function timelinetwo(){
    var tl2= gsap.timeline({
        scrollTrigger:{
            trigger: "#second",
            start: "top top",
            scrub: 1,
            // markers :true,
            pin: true,
            end: "bottom -250%"
        }
    })
    tl2
        .to(" .circle" ,{
        top:"50%",
        ease: Power1,
        stagger: .1,
        })
        .to(" .circle" ,{
            left:"50%",
            ease: Power1,
            stagger:.1,
            })
         .to(" .pi" ,{
            scale:10,
            ease: Power1,
            stagger:.1,
            })
        .to(" .pi" ,{
            background:"linear-gradient(to right,#d5a7b4,#B4AAD5)",
            ease: Power1.ease,
            stagger:.1,
            })
         .to("#stop h1" ,{
            left:"-150%",
            ease: Power1,
            duration:10,
            })
         .to("#sbtm #two" ,{
            opacity:0,
            duration:2,
            ease: Power1,
            })
         .to("#sbtm #one" ,{
            opacity:1,
            duration:2,
            ease: Power1,
            })
        
                 
        
    
}


timelineone()
timelinetwo()