function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".wrapper"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".wrapper", {
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
    pinType: document.querySelector(".wrapper").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
locomotive();

function loader() {
  setTimeout(() => {
    const loader = document.querySelector(".loader");
    document.fonts.ready.then(function () {
      gsap.to(loader, {
        height: "0vh",
        onComplete: () => {
          loader.style.display = none;
          loader.style.zIndex = "-1";
        },
      });
    });
  }, 2000);
}

// loader();

function sec1() {
  var tl1 = gsap.timeline({
    scrollTrigger: {
      scroller: ".wrapper",
      trigger: ".sec1",
      start: "top top",
      pin: true,
      end: "+=250%",
      scrub: true,
    },
  });

  tl1.to(
    ".heroImg",
    {
      height: "70%",
      top: "50%",
      rotate: "0deg",
    },
    "abcd"
  );
}
sec1();
