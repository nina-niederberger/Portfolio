const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-naechste",
    prevEl: ".swiper-button-vorherige",
  },

});


document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-naechste',
            prevEl: '.swiper-button-vorherige',
        },
        
        // HIER IST DIE PAGINIERUNG
        pagination: {
            el: '.swiper-pagination', // Wähle den Container, den du im HTML erstellt hast
            clickable: true,          // Erlaubt das Klicken auf die Punkte, um direkt zum Slide zu springen
        },
        
        // Füge hier deine weiteren Einstellungen (wie slidesPerView) hinzu
    });
});