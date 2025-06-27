gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ once: false });

const navbar = document.querySelector("nav");

if (navbar) {
  navbar.style.transition = "background 0.3s, opacity 0.3s";

  window.addEventListener("scroll", () => {
    const opacity = Math.max(1 - window.scrollY / 200, 0);
    navbar.style.opacity = opacity;
  });
}

gsap.from(".content-2", {
    x: -100,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".recent-events h2",
        start: "top 90%",
        toggleActions: "play reset play reset",
    }
});

gsap.from(".recent-events", {
    x: 150,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".events1",
        start: "top 90%",
        toggleActions: "play none none none",
    }
});

gsap.from(".recent-events h2", {
    x: -100,
    opacity: 0,
    duration: 2,
    delay: 0.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".recent-events h2",
        start: "top 80%",
        toggleActions: "play reset play reset",
        markers: true
    }
});

const footerH3 = document.querySelector("footer h3");
if (footerH3) {
    const text = footerH3.textContent;
    footerH3.innerHTML = text.split("").map(char =>
        `<span class="footer-h3-letter">${char === " " ? "&nbsp;" : char}</span>`
    ).join("");

    gsap.from(".footer-h3-letter", {
        x: -30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.04,
        scrollTrigger: {
            trigger: footerH3,
            start: "top 90%",
            toggleActions: "play reset play reset",
        }
    });
}

gsap.to(".track", {
    xPercent: -100,
    ease: "linear",
    duration: 20,
    repeat: -1,
  });
  gsap.from(".event-image", {
    x: -200,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".event-highlight",
      start: "top center", // trigger when .event-highlight top hits center of viewport
      toggleActions: "play none none none",
      scrub: false, // optional: disable if you want one-time animation
    },
  });
  
  gsap.from(".event-text", {
    x: 200,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".event-highlight",
      start: "top center",
      toggleActions: "play none none none",
      scrub: false,
    },
  });
  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
  gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ once: false });

gsap.from(".event-text", {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".event-highlight",
    start: "top center",
    markers: true
  }
});
gsap.registerPlugin(ScrollTrigger);

// LORD OF THE RINGS - float in from LEFT
gsap.from(".left-event .lotr", {
  x: -100,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".left-event",
    start: "top 85%",
    toggleActions: "play none none none",
    markers: true
  }
});

// CONNEXION - float in from RIGHT
gsap.from(".right-event .connexion", {
  x: 100,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".right-event",
    start: "top 85%",
    toggleActions: "play none none none",
    markers: true
  }
});
// Lord of the Rings image
gsap.from(".left-event .event-image", {
  x: -150,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".left-event",
    start: "top 90%",
    toggleActions: "play none none none",
    markers: false
  }
});

// Connexion image
gsap.from(".right-event .event-image", {
  x: 150,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".right-event",
    start: "top 90%",
    toggleActions: "play none none none",
    markers: false
  }
});

  