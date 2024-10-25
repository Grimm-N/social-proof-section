document.addEventListener("DOMContentLoaded", () => {
    fetch('./js/data.json')
      .then(response => response.json()) 
      .then(reviews => {
        const reviewContainer = document.querySelector(".section__review");
  
        reviews.forEach(({ name, status, review, avatar }) => {
          const reviewItem = document.createElement("div");
          reviewItem.classList.add("section__review-item");
  
          reviewItem.innerHTML = `
            <div class="section__review-item-header">
              <img src="${avatar}" alt="${name}'s avatar" class="review-avatar">
              <h3 class="review-name">${name}</h3>
              <p class="review-status">${status}</p>
            </div>
            <p class="section__review-item-comment">${review}</p>
          `;

          reviewContainer.appendChild(reviewItem);
        });
      })
      .catch(error => console.error('Error loading reviews:', error));
  });
  