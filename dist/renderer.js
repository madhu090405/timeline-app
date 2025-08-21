export function renderEvents(events) {
    const container = document.getElementById("timeline");
    container.innerHTML = events.map(e => `<div class="event"><h3>${e.title}</h3><p>${e.date}</p></div>`).join("");
}
//# sourceMappingURL=renderer.js.map