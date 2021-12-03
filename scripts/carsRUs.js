import { Technologies } from "./Technologies.js";
import { Wheels } from "./Wheels.js";
import { Paints } from "./Paints.js";
import { Interiors } from "./Interiors.js";
import { Orders } from "./Orders.js";
import { vehicleTypes } from "./vehicles.js";

export const CarsRUs = () => {
  return `
    <h1>Cars-R-Us</h1>
      <article class="choices">
        <section class="choices__paints options">
          ${Paints()}
        </section>
        <section class="choices__interiors options">
          ${Interiors()}
        </section>
        <section class="choices__wheels options">
          ${Wheels()}
        </section>
        <section class="choices__technologies options">
          ${Technologies()}
        </section>
        <section class="choices__types options">
          ${vehicleTypes()}
        </section>
      </article>
      <article class="order__button">
            <button id="orderButton">Place Your Order</button>
      </article>
      
      <article class="customOrders">
          ${Orders()}
      </article>
  `;
};