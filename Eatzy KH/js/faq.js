const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", function () {
    const faqItem = this.parentNode;
    const answer = this.nextElementSibling;
    const icon = this.querySelector("i");

    // Check if this FAQ is already open
    const isOpen = answer.classList.contains("active");

    // Close all FAQs
    document.querySelectorAll(".faq-answer").forEach((item) => {
      item.classList.remove("active");
    });

    document.querySelectorAll(".faq-question i").forEach((icon) => {
      icon.style.transform = "rotate(0)";
    });

    // If the clicked FAQ wasn't open, open it
    if (!isOpen) {
      answer.classList.add("active");
      icon.style.transform = "rotate(180deg)";
    }
  });
});
