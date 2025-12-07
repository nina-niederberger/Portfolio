const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-naechste",
    prevEl: ".swiper-button-vorherige",
  },

});

.swiper {
  width: 100%;
  height: 85vh; /* Beispiel: Nutze 85% der Bildschirmhöhe */
}

/* Wichtig: Sorge dafür, dass die Bilder den gesamten verfügbaren Platz im Slide einnehmen */
.swiper-slide {
  /* Zentriert den Inhalt vertikal */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  /* Das Bild deckt den Bereich ab, ohne die Proportionen zu verzerren */
  object-fit: cover; 
}