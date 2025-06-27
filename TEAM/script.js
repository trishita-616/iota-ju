// ScrollTrigger for nav disappearing (this part is fine)

gsap.to("nav", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    start: "top -10%",
    end: "top -200%",
    scrub: true,
    toggleActions: "play none none reverse",
  },
});

// Main animation timeline
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({ defaults: { duration: 1.2, ease: "power4.out" } });

// Animate nav logo and links
tl.from("nav .logo", { y: -80, opacity: 0 })
  .from(
    "nav .routes h3",
    {
      y: -50,
      opacity: 0,
      stagger: 0.1,
    },
    "-=0.8"
  )

  // Animate TEAM IOTA heading from right

  // Animate logo from left
  .from(
    ".herocontent",
    {
      x: -100,
      opacity: 0,
    },
    "-=0.8"
  );



// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Loop through each group-photo-section and animate the image + text
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".group-photo-section").forEach((section) => {
  const img = section.querySelector(".group-photo-img");
  const text = section.querySelector(".group-photo-text");

  // Animate image
  gsap.from(img, {
    opacity: 0,
    y: 80,
    scale: 0.95,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
      end: "top 40%",
      toggleActions: "play none none reverse",
    },
  });

  // Animate text slightly after image
  gsap.from(text, {
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
      end: "top 40%",
      toggleActions: "play none none reverse",
    },
  });
});



gsap.registerPlugin(ScrollTrigger);

// Animate each .teammembers section
document.querySelectorAll(".teammembers").forEach((section) => {
  const elements = section.querySelectorAll(".scale");

  gsap.from(elements, {
    opacity: 0,
    y: 50,
    scale: 0.95,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      end: "top 30%",
      toggleActions: "play none none reverse",
    },
  });
});




gsap.registerPlugin(ScrollTrigger);

const footerTl = gsap.timeline({
  scrollTrigger: {
    trigger: "footer",
    start: "top 85%",
    end: "top 30%",
    toggleActions: "play none none reverse",
  },
});

footerTl
  .from("footer h2", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  })
  .from(
    ".footRoutes h1",
    {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
    },
    "-=0.5"
  ) // overlaps slightly with previous
  .from(
    ".footchat div",
    {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    },
    "-=0.5"
  );
