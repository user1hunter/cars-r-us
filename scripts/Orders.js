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
import { Paints } from "./Paints.js";

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
  const techs = getTechnologies();
  const wheels = getWheels();
  const types = getTypes();

  const orderedPaint = paints.find((paint) => paint.id === order.paintId);
  const orderedInterior = interiors.find(
    (interior) => interior.id === order.interiorId
  );
  const orderedTech = techs.find((tech) => tech.id === order.techId);
  const orderedWheel = wheels.find((wheel) => wheel.id === order.wheelId);
  const orderedType = types.find((type) => type.id === order.typeId);

  const totalCost = (orderedPaint.price + orderedInterior.price + orderedTech.price + orderedWheel.price) * orderedType.price;
  const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return `<li class="orderItem">
    A ${orderedPaint.color} car with ${orderedWheel.wheelType} wheels, ${orderedInterior.seatType}, and the ${orderedTech.option} costs a total of ${costString}
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