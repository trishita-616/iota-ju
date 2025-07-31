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




// Carousel Initialization
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;
  
  const slides = Array.from(document.querySelectorAll('.carousel-slide'));
  const dotsContainer = document.getElementById('dots');
  const prevBtn = document.querySelector('.arrow.left');
  const nextBtn = document.querySelector('.arrow.right');
  
  let currentIndex = 0;
  let isTransitioning = false;
  let autoScroll = true;
  let scrollInterval;
  
  // Initialize slides position
  function initSlides() {
    slides.forEach((slide, index) => {
      slide.classList.remove('active', 'prev', 'next');
      if (index === currentIndex) {
        slide.classList.add('active');
      } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
        slide.classList.add('prev');
      } else if (index === (currentIndex + 1) % slides.length) {
        slide.classList.add('next');
      }
    });
  }
  
  // Initialize slides position
  function initSlides() {
    slides.forEach((slide, index) => {
      slide.classList.remove('active', 'prev', 'next');
      if (index === currentIndex) {
        slide.classList.add('active');
      } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
        slide.classList.add('prev');
      } else if (index === (currentIndex + 1) % slides.length) {
        slide.classList.add('next');
      }
    });
  }
  
  // Create dots
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });
  
  const dots = document.querySelectorAll('.dot');
  
  // Show first slide initially
  updateCarousel(false);
  
  // Update carousel display
  function updateCarousel(transition = true) {
    isTransitioning = true;
    
    // Remove all classes first
    slides.forEach(slide => {
      slide.classList.remove('active', 'prev', 'next');
    });
    
    // Calculate indices for prev and next slides
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    const nextIndex = (currentIndex + 1) % slides.length;
    
    // Update classes for current, prev and next slides
    if (slides[currentIndex]) slides[currentIndex].classList.add('active');
    if (slides[prevIndex]) slides[prevIndex].classList.add('prev');
    if (slides[nextIndex]) slides[nextIndex].classList.add('next');
    
    // Update active dot
    if (dots && dots.length) {
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
        dot.setAttribute('aria-current', index === currentIndex ? 'true' : 'false');
      });
    }
    
    // Update button states
    if (prevBtn) prevBtn.disabled = currentIndex === 0;
    if (nextBtn) nextBtn.disabled = currentIndex === slides.length - 1;
    
    // Update ARIA live region for screen readers
    updateAriaLive();
    
    // Reset transition flag after animation
    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  }
  
  // Go to specific slide
  function goToSlide(index) {
    if (isTransitioning || index < 0 || index >= slides.length) return;
    currentIndex = index;
    updateCarousel();
  }
  
  // Next slide
  function nextSlide() {
    if (isTransitioning) return;
    if (currentIndex >= slides.length - 1) {
      currentIndex = 0; // Loop to first slide
    } else {
      currentIndex++;
    }
    updateCarousel();
  }
  
  // Previous slide
  function prevSlide() {
    if (isTransitioning) return;
    if (currentIndex <= 0) {
      currentIndex = slides.length - 1; // Loop to last slide
    } else {
      currentIndex--;
    }
    updateCarousel();
  }
  
  // Auto-scroll functionality
  function startAutoScroll() {
    if (scrollInterval) clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
      if (autoScroll && !isTransitioning) {
        if (currentIndex < slides.length - 1) {
          nextSlide();
        } else {
          goToSlide(0); // Loop back to first slide
        }
      }
    }, 5000); // Change slide every 5 seconds
  }
  
  // Event Listeners
  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoScroll();
  });
  
  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoScroll();
  });
  
  // Reset auto-scroll timer
  function resetAutoScroll() {
    if (scrollInterval) clearInterval(scrollInterval);
    startAutoScroll();
  }
  
  // Pause auto-scroll on hover
  carousel.addEventListener('mouseenter', () => {
    autoScroll = false;
  });
  
  carousel.addEventListener('mouseleave', () => {
    autoScroll = true;
  });
  
  // Touch support for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    autoScroll = false;
  }, { passive: true });
  
  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
    autoScroll = true;
    resetAutoScroll();
  }, { passive: true });
  
  function handleSwipe() {
    const swipeThreshold = 50; // Minimum distance to trigger slide change
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide(); // Swipe left
      } else {
        prevSlide(); // Swipe right
      }
    }
  }
  
  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      if (isTransitioning) return;
      currentIndex = index;
      updateCarousel();
      resetAutoScroll();
    });
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
      resetAutoScroll();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
      resetAutoScroll();
    }
  });
  
  // ARIA live region for screen readers
  function updateAriaLive() {
    const status = document.getElementById('carousel-status') || createAriaLiveRegion();
    status.textContent = `Slide ${currentIndex + 1} of ${slides.length}`;
  }
  
  function createAriaLiveRegion() {
    const status = document.createElement('div');
    status.id = 'carousel-status';
    status.setAttribute('aria-live', 'polite');
    status.setAttribute('aria-atomic', 'true');
    status.className = 'sr-only';
    document.querySelector('.carousel-container').appendChild(status);
    return status;
  }
  
  // Initialize
  initSlides();
  updateCarousel(false); // Initial render without transition
  
  // Add event listeners
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      prevSlide();
      resetAutoScroll();
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      nextSlide();
      resetAutoScroll();
    });
  }
  
  // Click on slide navigation
  document.addEventListener('click', (e) => {
    const prevSlideEl = document.querySelector('.carousel-slide.prev');
    const nextSlideEl = document.querySelector('.carousel-slide.next');
    
    if (prevSlideEl && prevSlideEl.contains(e.target)) {
      prevSlide();
      resetAutoScroll();
    } else if (nextSlideEl && nextSlideEl.contains(e.target)) {
      nextSlide();
      resetAutoScroll();
    }
  });
  
  // Start auto-scroll after initialization
  startAutoScroll();
  
  // Handle window resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      updateCarousel(false);
    }, 250);
  });
  
  // Pause auto-scroll when tab is not visible
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearInterval(scrollInterval);
    } else {
      startAutoScroll();
    }
  });
});
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
