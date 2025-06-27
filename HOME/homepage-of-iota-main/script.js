// gsap




gsap.registerPlugin(ScrollTrigger);

gsap.to("nav", {
  opacity: 0,
  scale: 0.95,
  duration: 1.5,
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    start: "top -10%",
    end: "top -200%",
    scrub: true,
    toggleActions: "play none none reverse",
  },
});


const heroTimeline = gsap.timeline();

heroTimeline
  .from(".herocontent", {
    x: 1000,
    opacity: 0,
    scale: 0.8,
    duration: 1.4,
    ease: "power3.out",
  })
  .from(
    "nav",
    {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    },
    "-=0.5"
  );

gsap.from(".page2content>h1", {
  x: -400,
  opacity: 0,
  scale: 0.9,
  duration: 1.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".page2content",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: 2,
    toggleActions: "play reverse play reverse",
  },
});

gsap.from(".homeevents", {
  y: 200,
  opacity: 0,
  scale: 0.95,
  duration: 1.8,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".page2content",
    scroller: "body",
    start: "top 65%",
    end: "top 40%",
    scrub: 2,
    toggleActions: "play reverse play reverse",
  },
});

gsap.from(".eventtxt", {
  x: 300,
  y: 100,
  opacity: 0,
  duration: 1.8,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".page2content",
    scroller: "body",
    start: "top 60%",
    end: "top 40%",
    scrub: 2,
    toggleActions: "play reverse play reverse",
  },
});

gsap.from(".page3>h1", {
  y: 150,
  opacity: 0,
  scale: 0.95,
  duration: 1.6,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".page3",
    scroller: "body",
    start: "top 65%",
    end: "top 40%",
    scrub: 2,
    toggleActions: "play reverse play reverse",
  },
});

gsap.from(".page3 .carousel-container", {
  x: 100,
  opacity: 0,
  duration: 2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".page3",
    scroller: "body",
    start: "top 65%",
    end: "top 40%",
    scrub: 2,
    toggleActions: "play reverse play reverse",
  },
});

gsap.from(".knowmore>h1", {
  y: 150,
  opacity: 0,
  scale: 0.95,
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".knowmore",
    scroller: "body",
    start: "top 60%",
    end: "top 40%",
    scrub: 2,
    toggleActions: "play reverse play reverse",
  },
});

gsap.from(".knowmore>h2", {
  x: -300,
  opacity: 0,
  duration: 1.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".knowmore",
    scroller: "body",
    start: "top 20%",
    end: "top 40%",
    scrub: 2,
    toggleActions: "play reverse play reverse",
  },
});

gsap.from(".knowmorecontent .knowmorecontentleft", {
  x: -500,
  opacity: 0,
  duration: 2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".knowmorecontent",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
    scrub: 2,
    toggleActions: "play reverse play reverse",
  },
});

gsap.from(".knowmorecontent .knowmorecontentright", {
  x: 500,
  opacity: 0,
  duration: 2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".knowmorecontent",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
    scrub: 2,
    toggleActions: "play reverse play reverse",
  },
});




// carousel

const carousel = document.getElementById("carousel");
const images = carousel.getElementsByTagName("img");
const dotsContainer = document.getElementById("dots");
let current = 2; // Center image index

function updateCarousel() {
  for (let i = 0; i < images.length; i++) {
    images[i].className = ""; // reset
    if (i === current) {
      images[i].classList.add("active");
    } else if (i === (current - 1 + images.length) % images.length) {
      images[i].classList.add("left");
    } else if (i === (current + 1) % images.length) {
      images[i].classList.add("right");
    }
  }

  // Only update dot highlighting
  const dots = dotsContainer.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === current);
  });
}
setInterval(() => {
  current = (current + 1) % images.length;
  updateCarousel();
}, 5000); // change every 5 seconds


document.querySelector(".arrow.left").addEventListener("click", () => {
  current = (current - 1 + images.length) % images.length;
  updateCarousel();
});

document.querySelector(".arrow.right").addEventListener("click", () => {
  current = (current + 1) % images.length;
  updateCarousel();
});

updateCarousel();
// === SCROLLTRIGGER FIX FOR LAZY SECTIONS ===

// Refresh GSAP ScrollTrigger once the page fully loads
window.addEventListener("load", () => {
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100); // slight delay ensures video/bg renders
});

// Optional: refresh on scroll in case of section jumps or smooth scroll
window.addEventListener("scroll", () => {
  ScrollTrigger.refresh();
});

// Optional: if you use scrollIntoView() or JS-based jumps later,
// call this function after any scroll-to-section code
function refreshGSAP() {
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 300); // time to settle scroll
}
