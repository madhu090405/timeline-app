// src/modal.ts
export function showModal(content) {
    const modal = document.getElementById("modal");
    modal.innerHTML = `<div class="modal-content">${content}</div>`;
    modal.style.display = "block";
}
//# sourceMappingURL=modal.js.map