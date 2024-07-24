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
  const heading = document.querySelector(".sec1 h1");
  const text = heading.textContent;
  const wrappedText = text
    .split("")
    .map((letter) => `<span>${letter}</span>`)
    .join("");
  heading.innerHTML = wrappedText;

  gsap.to(".sec1 h1 span", {
    scrollTrigger: {
      scroller: ".wrapper",
      trigger: `.sec1`,
      start: `top top`,
      end: `+=250%`,
      scrub: true,
    },
    color: "#fff",
    stagger: 2,
  });

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
      ".sec1 .landscapeText",
      {
        top: "50%",
      },
      "abcd"
    );

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
// sec1();

function sec2() {
  var sb = document.querySelector(".sec2 .sliderbox");
  var mf = document.querySelector(".sec2 .sliderbox .clickFollower");
  sb.addEventListener("mouseenter", function () {
    gsap.to(mf, {
      scale: 1,
      opacity: 1,
    });
  });
  sb.addEventListener("mouseleave", function () {
    gsap.to(mf, {
      scale: 0,
      opacity: 0,
    });
  });
  sb.addEventListener("mousemove", function (dets) {
    gsap.to(mf, {
      left: dets.x - 760,
      top: dets.y - 380,
    });
  });
}
// sec2();

function sec3() {
  const heading = document.querySelector(".sec3 h1");
  const text = heading.textContent;
  const wrappedText = text
    .split("")
    .map((letter) => `<span>${letter}</span>`)
    .join("");
  heading.innerHTML = wrappedText;

  gsap.to(".sec3 h1 span", {
    scrollTrigger: {
      scroller: ".wrapper",
      trigger: `.sec3`,
      start: `top 30%`,
      end: `top top`,
      scrub: true,
    },
    color: "#fff",
    stagger: 2,
  });

  // Canvas code ----->
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
    ./assets/canvas/scene00004.png
    ./assets/canvas/scene00005.png
    ./assets/canvas/scene00006.png
    ./assets/canvas/scene00007.png
    ./assets/canvas/scene00008.png
    ./assets/canvas/scene00009.png
    ./assets/canvas/scene00010.png
    ./assets/canvas/scene00011.png
    ./assets/canvas/scene00012.png
    ./assets/canvas/scene00013.png
    ./assets/canvas/scene00014.png
    ./assets/canvas/scene00015.png
    ./assets/canvas/scene00016.png
    ./assets/canvas/scene00017.png
    ./assets/canvas/scene00018.png
    ./assets/canvas/scene00019.png
    ./assets/canvas/scene00020.png
    ./assets/canvas/scene00021.png
    ./assets/canvas/scene00022.png
    ./assets/canvas/scene00023.png
    ./assets/canvas/scene00024.png
    ./assets/canvas/scene00025.png
    ./assets/canvas/scene00026.png
    ./assets/canvas/scene00027.png
    ./assets/canvas/scene00028.png
    ./assets/canvas/scene00029.png
    ./assets/canvas/scene00030.png
    ./assets/canvas/scene00031.png
    ./assets/canvas/scene00032.png
    ./assets/canvas/scene00033.png
    ./assets/canvas/scene00034.png
    ./assets/canvas/scene00035.png
    ./assets/canvas/scene00036.png
    ./assets/canvas/scene00037.png
    ./assets/canvas/scene00038.png
    ./assets/canvas/scene00039.png
    ./assets/canvas/scene00040.png
    ./assets/canvas/scene00041.png
    ./assets/canvas/scene00042.png
    ./assets/canvas/scene00043.png
    ./assets/canvas/scene00044.png
    ./assets/canvas/scene00045.png
    ./assets/canvas/scene00046.png
    ./assets/canvas/scene00047.png
    ./assets/canvas/scene00048.png
    ./assets/canvas/scene00049.png
    ./assets/canvas/scene00050.png
    ./assets/canvas/scene00051.png
    ./assets/canvas/scene00052.png
    ./assets/canvas/scene00053.png
    ./assets/canvas/scene00054.png
    ./assets/canvas/scene00055.png
    ./assets/canvas/scene00056.png
    ./assets/canvas/scene00057.png
    ./assets/canvas/scene00058.png
    ./assets/canvas/scene00059.png
    ./assets/canvas/scene00060.png
    ./assets/canvas/scene00061.png
    ./assets/canvas/scene00062.png
    ./assets/canvas/scene00063.png
    ./assets/canvas/scene00064.png
    ./assets/canvas/scene00065.png
    ./assets/canvas/scene00066.png
    ./assets/canvas/scene00067.png
    ./assets/canvas/scene00068.png
    ./assets/canvas/scene00069.png
    ./assets/canvas/scene00070.png
    ./assets/canvas/scene00071.png
    ./assets/canvas/scene00072.png
    ./assets/canvas/scene00073.png
    `;
    return data.split("\n")[index];
  }

  const frameCount = 70;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `.sec3>canvas`,
      start: `top top`,
      end: `400% top`,
      scroller: ".wrapper",
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }

  ScrollTrigger.create({
    trigger: ".sec3>canvas",
    pin: true,
    start: `top top`,
    end: `400% top`,
    scroller: ".wrapper",
  });
}

// sec3();

function sec4() {
  gsap.to(".st", {
    repeat: -1,
    x: "-100%",
    ease: "linear",
    duration: 6,
  });
}
sec4();

function sec5() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      scroller: ".wrapper",
      trigger: ".sec5",
      start: "top top",
      pin: true,
      end: "+=250%",
      scrub: true,
    },
  });

  tl2
    .to(
      ".reel",
      {
        scale: 1,
      },
      "jklm"
    )
    .to(
      ".reeltext",
      {
        wordSpacing: "0vmax",
      },
      "jklm"
    );
}
sec5();

function mouseEffect() {
  Shery.makeMagnet(".magnet");
}
mouseEffect();
