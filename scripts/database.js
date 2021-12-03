const database = {
  orderBuilder: {},
  paints: [
    {
      id: 1,
      color: "Silver",
      price: 50,
    },
    {
      id: 2,
      color: "Midnight Blue",
      price: 100,
    },
    {
      id: 3,
      color: "Firebrick Red",
      price: 200,
    },
    {
      id: 4,
      color: "Spring Green",
      price: 200,
    },
  ],
  interiors: [
    {
      id: 1,
      seatType: "Beige Fabric",
      price: 0,
    },
    {
      id: 2,
      seatType: "Charcoal Fabric",
      price: 0,
    },
    {
      id: 3,
      seatType: "White Leather",
      price: 500,
    },
    {
      id: 4,
      seatType: "Black Leather",
      price: 500,
    },
  ],
  technologies: [
    {
      id: 1,
      option: "Basic Package",
      description: "basic sound system",
      price: 0,
    },
    {
      id: 2,
      option: "Navigation Package",
      description: "includes integrated navigation controls",
      price: 300,
    },
    {
      id: 3,
      option: "Visibility Package",
      description: "includes side and reat cameras",
      price: 1000,
    },
    {
      id: 4,
      option: "Ultra Package",
      description: "includes navigation and visibility packages",
      price: 1200,
    },
  ],
  wheels: [
    {
      id: 1,
      wheelType: "17-inch Pair Radial",
      price: 0,
    },
    {
      id: 2,
      wheelType: "17-inch Pair Radial Black",
      price: 0,
    },
    {
      id: 3,
      wheelType: "8-inch Pair Spoke Silver",
      price: 0,
    },
    {
      id: 4,
      wheelType: "18-inch Pair Spoke Black",
      price: 0,
    },
  ],
  types: [
    { id: 1, name: "Car", price: 1 },
    { id: 2, name: "SUV", price: 1.5 },
    { id: 3, name: "Truck", price: 2.25 },
  ],
  customOrders: [
    {
      id: 1,
      paintId: 3,
      interiorId: 3,
      techId: 1,
      wheelId: 2,
      typeId: 1,
      timestamp: 1614659931693,
    },
  ],
};

export const getPaints = () => {
  return database.paints.map((paint) => ({ ...paint }));
};

export const getInteriors = () => {
  return database.interiors.map((interior) => ({ ...interior }));
};

export const getTechnologies = () => {
  return database.technologies.map((tech) => ({ ...tech }));
};

export const getWheels = () => {
  return database.wheels.map((wheel) => ({ ...wheel }));
};

export const getOrders = () => {
  return database.customOrders.map((order) => ({ ...order }));
};

export const getTypes = () => {
  return database.types.map((type) => ({ ...type }));
};

export const getOrderBuilder = () => {
  return { ...database.orderBuilder };
};

export const setPaint = (id) => {
  database.orderBuilder.paintId = id;
};

export const setInterior = (id) => {
  database.orderBuilder.interiorId = id;
};

export const setTechnology = (id) => {
  database.orderBuilder.techId = id;
};

export const setWheel = (id) => {
  database.orderBuilder.wheelId = id;
};

export const setType = (id) => {
  database.orderBuilder.typeId = id;
};

export const addCustomOrder = () => {
  const newOrder = { ...database.orderBuilder };
  const newId = database.customOrders[database.customOrders.length - 1].id + 1;
  newOrder.id = newId;
  newOrder.timestamp = Date.now();
  database.customOrders.push(newOrder);
  database.orderBuilder = {};
  document.dispatchEvent(new CustomEvent("stateChanged"));
};