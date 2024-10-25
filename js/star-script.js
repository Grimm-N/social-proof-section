const starContainers = document.querySelectorAll('.rate__item-stars');

starContainers.forEach(container => {
  for (let i = 0; i < 5; i++) { 
    const star = document.createElement('img'); 
    star.src = './images/icon-star.svg'; 
    star.alt = 'yellow-orange star icon'; 
    container.appendChild(star); 
  }
});
