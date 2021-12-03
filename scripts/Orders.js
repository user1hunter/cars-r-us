import {
  getPaints,
  getInteriors,
  getTechnologies,
  getWheels,
  getOrders,
  getTypes,
  getOrderBuilder,
  addCustomOrder,
} from "./database.js";

export const Orders = () => {
  const orders = getOrders();

  let htmlString = `<h2>Your Car Orders</h2>
  <ul>`;

  htmlString += orders.map((order) => buildCustomOrder(order)).join("");

  return htmlString + "</ul>";
};

const buildCustomOrder = (order) => {
  const paints = getPaints();
  const interiors = getInteriors();
  const technology = getTechnologies();
  const wheels = getWheels();
  const types = getTypes();

  const selectedPaint = paints.find((paint) => paint.id === order.paintId)
  const selectedInterior = interiors.find((interior) => interior.id === order.interiorId)
  const selectedTechnology = technology.find((tech) => tech.id === order.techId)
  const selectedWheels = wheels.find((wheel) => wheel.id === order.wheelId)
  const selectedType = types.find((type) => type.id === order.typeId)

  const totalPrice = (selectedPaint.price + selectedInterior.price + selectedTechnology.price + selectedWheels.price) * selectedType.price;
  
  const priceString = totalPrice.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  
  return `<li class="orderItem">
    A ${selectedPaint.color} ${selectedType.name} with ${selectedWheels.type} wheels, ${selectedInterior.seatType}, and the ${selectedTechnology.option} costs a total of ${priceString}
  </li>`;
};

document.addEventListener("click", (event) => {
  if (event.target.id === "orderButton") {
    const builtOrder = getOrderBuilder();
    if (Object.keys(builtOrder).length >= 5) {
      addCustomOrder();
    }
  }
});