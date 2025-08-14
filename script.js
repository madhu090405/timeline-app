document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.getElementById("timeline");
  const modal = document.getElementById("modal");
  const modalContent = modal.querySelector(".modal-content");
  const closeBtn = modal.querySelector(".close");

  fetch("events.json")
    .then((response) => response.json())
    .then((events) => {
      events.forEach((event, index) => {
        const marker = document.createElement("div");
        marker.className = "event-marker";
        marker.textContent = event.year;
        marker.dataset.index = index;
        timeline.appendChild(marker);

        marker.addEventListener("click", () => {
          modalContent.innerHTML = `
            <h2>${event.title}</h2>
            <p><strong>Year:</strong> ${event.year}</p>
            <p><strong>Category:</strong> ${event.category}</p>
            <p>${event.description}</p>
            <img src="${event.imageURL}" alt="${event.title}" />
          `;
          modal.style.display = "block";
        });
      });
    });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
