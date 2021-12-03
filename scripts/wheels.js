import { getWheels, setWheel } from "./database.js";

export const Wheels = () => {
  const wheels = getWheels();

  return `<h2>Wheel Options</h2>
    <select id="wheels">
      <option value="0">Select wheels</option>
      ${wheels.map(
          (wheel) => `<option value="${wheel.id}">${wheel.type}</option>`
        )
        .join("")}
    </select>
  `;
};

document.addEventListener("change", (event) => {
  if (event.target.id === "wheels") {
    const wheels = getWheels();
    const currentId = parseInt(event.target.value);
    const currentWheel = wheels.find(
      (wheel) => wheel.id === parseInt(currentId)
    );
    setWheel(currentId);
  }
});