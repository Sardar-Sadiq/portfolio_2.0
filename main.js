gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true,
  lerp: 0.08,
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed",
});

const vw = (coef) => window.innerWidth * (coef / 100);
const vh = (coef) => window.innerHeight * (coef / 100);

const heroScroller = gsap.timeline({
  paused: true,
  scrollTrigger: {
    trigger: ".hero-header.h-1",
    scroller: ".smooth-scroll",
    pin: ".pin-wrapper",
    start: "top 5%",
    scrub: true,
    end: `${vh(100)}`,
  },
});

heroScroller
  .to(
    [".hero-header.h-1", ".hero-header.h-4"],
    {
      scale: 2,
      y: vh(150),
      xPercent: -150,
    },
    "heroScroll"
  )
  .to(
    ".hero-header.h-2",
    {
      scale: 2,
      y: vh(150),
      xPercent: 150,
    },
    "heroScroll"
  )
  .to(
    "#heroImage",
    {
      scaleY: 2,
    },
    "heroScroll"
  )
  .to(
    "#heroImage .image",
    {
      scaleX: 2,
      xPercent: 50,
    },
    "heroScroll"
  );

// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// ScrollTrigger.refresh();

// var main = document.querySelector("#main");
// var crsr = document.querySelector(".cursor");

// main.addEventListener("mousemove", function (dets) {
//   crsr.style.left = dets.x + "px";
//   crsr.style.top = dets.y + "px";
// });
