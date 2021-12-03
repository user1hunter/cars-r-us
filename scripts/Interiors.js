import { getInteriors, setInterior } from "./database.js";

export const Interiors = () => {
  const interiors = getInteriors();

  return `<h2>Interior Options</h2>
    <select id="interior">
      <option value="0">Select an interior</option>
      ${interiors.map(
          (interior) =>
            `<option value="${interior.id}">${interior.seatType}</option>`
        )
        .join("")}
    </select>
  `;
};

document.addEventListener("change", (event) => {
  if (event.target.id === "interior") {
    const interiors = getInteriors();
    const currentId = event.target.value;
    const currentInterior = interiors.find(
      (interior) => interior.id === parseInt(currentId)
    );
    setInterior(currentId);
  }
});