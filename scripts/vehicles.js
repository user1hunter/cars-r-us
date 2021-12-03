import { getTypes, setType } from "./database.js"

export const vehicleTypes = () => {
    const types = getTypes();
    
    return `<h2>Vehicle Options</h2>
    <select id="type">
        <option value="0">Select a Vehicle Option</option>
        ${types.map((type) => {
            return `<option value="${type.id}">${type.name}</option>`;
          })
          .join("")}
    </select>
`;
};
document.addEventListener("change", (event) => {
    if (event.target.id === "type") {
      const types = getTypes();
      const currentId = parseInt(event.target.value);
      const currentType = types.find((type) => type.id === parseInt(currentId));
      setType(currentId);
    }
  });

