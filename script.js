document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");

    const fillSkills = () => {
      progressBars.forEach((bar) => {
        const targetWidth = bar.getAttribute("data-fill");
        const rect = bar.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 50;

        if (isVisible) {
          bar.style.width = targetWidth;
        }
      });
    };

    window.addEventListener("scroll", fillSkills);
  });

  // Slider JavaScript
  function unlockContact() {
    let unlockBox = document.querySelector('.unlock-box');
    let contactForm = document.querySelector('.contact-form');

    unlockBox.style.display = 'none'; // Hide the box
    contactForm.style.display = 'block'; // Show the form
    setTimeout(() => {
        contactForm.style.opacity = '1';
        contactForm.style.transform = 'translateY(0)';
    }, 50);
}
