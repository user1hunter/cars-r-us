import { getPaints, setPaint } from "./database.js";

export const Paints = () => {
  const paints = getPaints();

  return `<h2>Paint Options</h2>
    <select id="paint">
      <option value="0">Select a paint color</option>
      ${paints.map(
          (paint) => `<option value="${paint.id}">${paint.color}</option>`
        )
        .join("")}
          </select>
  </section>
  `;
};

document.addEventListener("change", (event) => {
  if (event.target.id === "paint") {
    const paints = getPaints();
    const currentId = event.target.value;
    const currentPaint = paints.find(
      (paint) => paint.id === parseInt(currentId)
    );
    setPaint(currentId);
  }
});