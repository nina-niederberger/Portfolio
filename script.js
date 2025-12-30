const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-naechste",
    prevEl: ".swiper-button-vorherige",
  },

  // Enable mousewheel control
  mousewheel: {
    invert: false,
    sensitivity: 1,
    releaseOnEdges: true,
  },

});

// Create tooltip element
const tooltip = document.createElement('div');
tooltip.className = 'image-tooltip';
document.body.appendChild(tooltip);

// Get all swiper slide images
const slideImages = document.querySelectorAll('.swiper-slide img');

slideImages.forEach(img => {
  img.addEventListener('mouseenter', function(e) {
    const altText = this.getAttribute('alt');
    if (altText) {
      tooltip.textContent = altText;
      tooltip.style.display = 'block';
    }
  });

  img.addEventListener('mousemove', function(e) {
    tooltip.style.left = e.pageX + 15 + 'px';
    tooltip.style.top = e.pageY + 15 + 'px';
  });

  img.addEventListener('mouseleave', function() {
    tooltip.style.display = 'none';
  });
});


