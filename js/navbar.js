// Mobile menu toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
  // Change icon based on menu state
  const icon = mobileMenuButton.querySelector("i");
  if (mobileMenu.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

// Mobile dropdown toggle
const mobileDropdownButton = document.getElementById("mobile-dropdown-button");
const mobileDropdown = document.getElementById("mobile-dropdown");

mobileDropdownButton.addEventListener("click", function () {
  mobileDropdown.classList.toggle("active");
  // Rotate chevron icon
  const icon = mobileDropdownButton.querySelector("i");
  if (mobileDropdown.classList.contains("active")) {
    icon.style.transform = "rotate(180deg)";
  } else {
    icon.style.transform = "rotate(0)";
  }
});

// Desktop Explore dropdown toggle
const exploreDropdownButton = document.querySelector(".dropdown > a");
const exploreDropdownMenu = document.querySelector(".dropdown-menu");

exploreDropdownButton.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  exploreDropdownMenu.classList.toggle("show");
});

// Close explore dropdown when clicking outside
document.addEventListener("click", function (event) {
  if (
    exploreDropdownMenu &&
    !exploreDropdownButton.contains(event.target) &&
    !exploreDropdownMenu.contains(event.target)
  ) {
    exploreDropdownMenu.classList.remove("show");
  }
});

// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  const isClickInsideMenu =
    mobileMenu.contains(event.target) ||
    mobileMenuButton.contains(event.target);
  if (!isClickInsideMenu && mobileMenu.classList.contains("active")) {
    mobileMenu.classList.remove("active");
    const icon = mobileMenuButton.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

// Search functionality
const searchButton = document.getElementById("search-button");
const searchDropdown = document.getElementById("search-dropdown");
const searchModal = document.getElementById("search-modal");
const searchModalClose = document.getElementById("search-modal-close");

searchButton.addEventListener("click", function (e) {
  e.stopPropagation();

  // For mobile: show modal
  if (window.innerWidth < 640) {
    searchModal.classList.add("active");
    document.body.style.overflow = "hidden";
  } else {
    // For desktop: show dropdown
    searchDropdown.classList.toggle("active");
  }
});

// Close search modal
searchModalClose.addEventListener("click", function () {
  searchModal.classList.remove("active");
  document.body.style.overflow = "";
});

// Close search dropdown when clicking outside
document.addEventListener("click", function (event) {
  const isClickInsideSearch =
    searchDropdown.contains(event.target) ||
    searchButton.contains(event.target);
  if (!isClickInsideSearch && searchDropdown.classList.contains("active")) {
    searchDropdown.classList.remove("active");
  }
});

// Search categories
const searchCategories = document.querySelectorAll(".search-category");
searchCategories.forEach((category) => {
  category.addEventListener("click", function () {
    searchCategories.forEach((c) => c.classList.remove("active"));
    this.classList.add("active");
  });
});

// Handle search suggestions
const suggestionItems = document.querySelectorAll(".suggestion-item");
suggestionItems.forEach((item) => {
  item.addEventListener("click", function () {
    const searchText = this.querySelector("span").textContent;
    const searchInputs = document.querySelectorAll('input[type="text"]');
    searchInputs.forEach((input) => {
      input.value = searchText;
    });
  });
});

// Close search modal when pressing Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (searchModal.classList.contains("active")) {
      searchModal.classList.remove("active");
      document.body.style.overflow = "";
    }
    if (searchDropdown.classList.contains("active")) {
      searchDropdown.classList.remove("active");
    }
    if (profileDropdown.classList.contains("show")) {
      profileDropdown.classList.remove("show");
    }
    if (mobileProfileDropdown.classList.contains("show")) {
      mobileProfileDropdown.classList.remove("show");
    }
    if (exploreDropdownMenu.classList.contains("show")) {
      exploreDropdownMenu.classList.remove("show");
    }
  }
});
