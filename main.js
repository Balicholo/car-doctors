// main.js

// Select the container to be scrolled
const scrollWrapper = document.querySelector('.scroll-wrapper');
const container = document.querySelector('.container');

// Function to smoothly scroll the container
function startAutoScroll() {
    let scrollPosition = 0;

    function scroll() {
        // Increase the scroll position by 1 pixel
        scrollPosition += 1;
        scrollWrapper.scrollTop = scrollPosition;

        // Check if we've reached the bottom of the container
        if (scrollWrapper.scrollTop >= container.scrollHeight - scrollWrapper.clientHeight) {
            // Reset scroll position to create an infinite effect
            scrollPosition = 0;
            scrollWrapper.scrollTop = scrollPosition;
        }

        // Use requestAnimationFrame for smooth animation
        requestAnimationFrame(scroll);
    }

    scroll();
}

// Start the auto-scroll effect
window.onload = startAutoScroll;

// -----Nav----
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open');
  }
  
  function closeMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.remove('open');
  } 

// blur the navbar on scroll
const navbar = document.querySelector('.navbar');

// Add scroll event listener
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled'); // Add the blur background
  } else {
    navbar.classList.remove('scrolled'); // Remove the blur background
  }
});

// COUNTER
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".rate-number");

  const startCounters = () => {
    counters.forEach((counter) => {
      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        let current = +counter.innerText.replace("+", ""); // Remove + for calculation
        const increment = Math.ceil(target / 100); // Adjust increment speed

        if (current < target) {
          counter.innerText = current + increment + "+"; // Add + sign
          setTimeout(updateCounter, 200); // Adjust timing for smoother or faster animation
        } else {
          counter.innerText = target + "+"; // Ensure it ends exactly at the target
        }
      };

      // Reset counter and start animation again after delay
      setTimeout(() => {
        counter.innerText = "0";
        updateCounter();
      }, 5000); // Delay before restart (adjust as needed)
    });
  };

  // Start the counters initially and loop them continuously
  startCounters();
  setInterval(startCounters, 10000); // Set loop interval (adjust as needed)
});

// TESTIMONIAL CAROUSEL
document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".swiper", {
    loop: true, // Allows continuous scrolling
    autoplay: {
      delay: 3000, // Time between slides (in ms)
      disableOnInteraction: false, // Autoplay continues even after interaction
    },
    pagination: {
      el: ".swiper-pagination", // Enable pagination bullets
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next", // Next button
      prevEl: ".swiper-button-prev", // Previous button
    },
    slidesPerView: 1, // Number of slides visible at a time
    spaceBetween: 20, // Space between slides
    breakpoints: {
      768: {
        slidesPerView: 2, // Show 2 slides on tablet
      },
      1024: {
        slidesPerView: 3, // Show 3 slides on desktop
      },
    },
  });
});
