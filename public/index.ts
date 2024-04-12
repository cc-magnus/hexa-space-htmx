import { monthlyRate } from "src/bounded_contexts/space-ship-store-front/domain/space-ship";

document.addEventListener("alpine:init", () => {
  window.Alpine.magic("monthlyRate", () => {
    console.log("MAGIC");
    return monthlyRate;
  });
});
