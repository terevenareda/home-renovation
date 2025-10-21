$(document).ready(function () {
  // ----- Product Navigation -----
  const productItems = $(".product");
  let currentIndex = productItems.index($(".product.active"));

  // Next button
  $("#next").on("click", function (e) {
    e.preventDefault();
    productItems.eq(currentIndex).removeClass("active");
    currentIndex = (currentIndex + 1) % productItems.length;
    productItems.eq(currentIndex).addClass("active");
  });

  // Prev button
  $("#prev").on("click", function (e) {
    e.preventDefault();
    productItems.eq(currentIndex).removeClass("active");
    currentIndex = (currentIndex - 1 + productItems.length) % productItems.length;
    productItems.eq(currentIndex).addClass("active");
  });



  // ----- Contact Form (EmailJS) -----
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      emailjs.sendForm('service_eq9fzdi', 'template_bcuk5hz', this)
        .then(() => {
          alert('Message sent!');
          this.reset();
        }, (err) => {
          alert('Error: ' + JSON.stringify(err));
        });
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".navlinkwrap");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // optional: close menu when link clicked
  document.querySelectorAll(".navlinkwrap a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
});
