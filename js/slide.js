document.addEventListener("DOMContentLoaded", function () {
  // Hero slideshow functionality
  const heroSlides = document.querySelectorAll(".hero-slide");
  const heroPrevButton = document.querySelector(".hero-arrow.prev");
  const heroNextButton = document.querySelector(".hero-arrow.next");
  const heroIndicators = document.querySelectorAll(".hero-indicator");
  let currentHeroSlide = 0;

  function showHeroSlide(index) {
    // Hide all slides
    heroSlides.forEach((slide) => {
      slide.classList.remove("active");
    });

    // Deactivate all indicators
    heroIndicators.forEach((indicator) => {
      indicator.classList.remove("active");
    });

    // Show the selected slide
    heroSlides[index].classList.add("active");

    // Activate the corresponding indicator
    heroIndicators[index].classList.add("active");

    // Update current slide index
    currentHeroSlide = index;
  }

  // Previous slide button
  heroPrevButton.addEventListener("click", function () {
    let newIndex = currentHeroSlide - 1;
    if (newIndex < 0) {
      newIndex = heroSlides.length - 1;
    }
    showHeroSlide(newIndex);
  });

  // Next slide button
  heroNextButton.addEventListener("click", function () {
    let newIndex = currentHeroSlide + 1;
    if (newIndex >= heroSlides.length) {
      newIndex = 0;
    }
    showHeroSlide(newIndex);
  });

  // Indicator buttons
  heroIndicators.forEach((indicator, index) => {
    indicator.addEventListener("click", function () {
      showHeroSlide(index);
    });
  });

  // Auto-advance slides every 5 seconds
  setInterval(function () {
    let newIndex = currentHeroSlide + 1;
    if (newIndex >= heroSlides.length) {
      newIndex = 0;
    }
    showHeroSlide(newIndex);
  }, 5000);

  // Add touch support for mobile devices
  let touchStartX = 0;
  let touchEndX = 0;
  const heroSlideshow = document.querySelector(".hero-slideshow");

  heroSlideshow.addEventListener(
    "touchstart",
    function (e) {
      touchStartX = e.changedTouches[0].screenX;
    },
    false
  );

  heroSlideshow.addEventListener(
    "touchend",
    function (e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    },
    false
  );

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      // Swipe left - next slide
      let newIndex = currentHeroSlide + 1;
      if (newIndex >= heroSlides.length) {
        newIndex = 0;
      }
      showHeroSlide(newIndex);
    }

    if (touchEndX > touchStartX + 50) {
      // Swipe right - previous slide
      let newIndex = currentHeroSlide - 1;
      if (newIndex < 0) {
        newIndex = heroSlides.length - 1;
      }
      showHeroSlide(newIndex);
    }
  }

  // Add heart toggle functionality
  const heartButtons = document.querySelectorAll(".action-button");
  heartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const icon = this.querySelector("i");
      if (icon.classList.contains("far")) {
        icon.classList.remove("far");
        icon.classList.add("fas");
        icon.style.color = "#F72C5B";
      } else {
        icon.classList.remove("fas");
        icon.classList.add("far");
        icon.style.color = "";
      }
    });
  });

  // Profile dropdown functionality
  const profileButton = document.getElementById("profile-button");
  const profileDropdown = document.getElementById("profile-dropdown");
  const mobileProfileButton = document.getElementById("mobile-profile-button");
  const mobileProfileDropdown = document.getElementById(
    "mobile-profile-dropdown"
  );

  // Desktop profile dropdown toggle
  profileButton.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    profileDropdown.classList.toggle("show");

    // Close other dropdowns
    if (searchDropdown.classList.contains("active")) {
      searchDropdown.classList.remove("active");
    }
  });

  // Mobile profile dropdown toggle
  mobileProfileButton.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    mobileProfileDropdown.classList.toggle("show");
  });

  // Close profile dropdowns when clicking outside
  document.addEventListener("click", function (event) {
    // Desktop profile dropdown
    if (
      profileDropdown &&
      profileDropdown.classList.contains("show") &&
      !profileButton.contains(event.target) &&
      !profileDropdown.contains(event.target)
    ) {
      profileDropdown.classList.remove("show");
    }

    // Mobile profile dropdown
    if (
      mobileProfileDropdown &&
      mobileProfileDropdown.classList.contains("show") &&
      !mobileProfileButton.contains(event.target) &&
      !mobileProfileDropdown.contains(event.target)
    ) {
      mobileProfileDropdown.classList.remove("show");
    }
  });

  // Log for debugging
  console.log(
    "Profile buttons initialized:",
    profileButton ? "Desktop button found" : "Desktop button missing",
    mobileProfileButton ? "Mobile button found" : "Mobile button missing"
  );
});
