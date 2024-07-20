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

function menu() {
  let mbtn = document.querySelector(".menubtn");
  let toggle = true;

  gsap.to(mbtn, {
    scrollTrigger: {
      scroller: ".wrapper",
      trigger: ".sec4",
      start: "top 50%",
      scrub: true,
    },
    opacity: 1,
    zIndex: "999",
  });

  mbtn.addEventListener("click", function () {
    let tl2 = gsap.timeline();

    if (toggle === true) {
      gsap.to(".menubtn .textbox .open", {
        y: "-100%",
      });
      gsap.to(".menubtn .textbox .close", {
        y: "-100%",
      });

      tl2
        .to(".l2", {
          width: "0%",
        })
        .to(
          ".l1",
          {
            top: "50%",
          },
          "efgh"
        )
        .to(
          ".l3",
          {
            top: "50%",
          },
          "efgh"
        )
        .to(
          ".l1",
          {
            rotate: "45deg",
          },
          "ijkl"
        )
        .to(
          ".l3",
          {
            rotate: "-45deg",
          },
          "ijkl"
        );
      toggle = false;
    } else {
      gsap.to(".menubtn .textbox .open", {
        y: "initial",
      });
      gsap.to(".menubtn .textbox .close", {
        y: "initial",
      });

      tl2
        .to(
          ".l1",
          {
            rotate: "0deg",
          },
          "ijkl"
        )
        .to(
          ".l3",
          {
            rotate: "0deg",
          },
          "ijkl"
        )
        .to(
          ".l1",
          {
            top: "5%",
          },
          "efgh"
        )
        .to(
          ".l3",
          {
            top: "95%",
          },
          "efgh"
        )
        .to(".l2", {
          width: "100%",
        });

      toggle = true;
    }
  });
}
menu();

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

  if (window.screen.width < 850) {
    tl1
      .to(
        ".heroImg",
        {
          height: "80%",
          top: "41%",
          rotate: "0deg",
        },
        "abcd"
      )
      .to(
        ".sec1 h1",
        {
          top: "41%",
          color: "#F8F8F8",
        },
        "abcd"
      );
  } else {
    tl1
      .to(
        ".heroImg",
        {
          height: "80%",
          top: "50%",
          rotate: "0deg",
        },
        "abcd"
      )
      .to(
        ".sec1 h1",
        {
          top: "50%",
          color: "#F8F8F8",
        },
        "abcd"
      );
  }

  document
    .querySelector(".circular")
    .addEventListener("mousemove", function (dets) {
      var bndrectvals = document
        .querySelector(".circular")
        .getBoundingClientRect();
      var xVal = dets.clientX - bndrectvals.x;
      var yVal = dets.clientY - bndrectvals.y;

      document.querySelector(".minicircle").style.top = yVal + "px";
      document.querySelector(".minicircle").style.left = xVal + "px";
      document.querySelector(".minicircle").style.boxShadow =
        "0 0 10px 3px black";
    });

  document
    .querySelector(".circular")
    .addEventListener("mouseleave", function (dets) {
      document.querySelector(".minicircle").style.top = 50 + "%";
      document.querySelector(".minicircle").style.left = 50 + "%";

      document.querySelector(".minicircle").style.boxShadow = "none";
    });
}
sec1();
