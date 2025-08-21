var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// src/index.ts
import { fetchEvents } from "./fetcher.js";
import { renderEvents } from "./renderer.js";
import { showModal } from "./modal.js";
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const events = yield fetchEvents();
        renderEvents(events);
        document.addEventListener("click", (e) => {
            const target = e.target;
            if (target.classList.contains("event")) {
                showModal(target.innerHTML);
            }
        });
    });
}
main();
//# sourceMappingURL=index.js.map