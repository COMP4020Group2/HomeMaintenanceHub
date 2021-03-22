let pastOrders = [
  {
    id: 1,
    name: "Brett's Premium Carpentry",
    date: 'July 9, 2020',
    price: 2200,
    positive: true
  },
  {
    id: 2,
    name: "Brett's Mediocre Carpentry",
    date: 'June 18, 2020',
    price: 225,
    positive: false
  },
  {
    id: 3,
    name: "Brett's Budget Carpentry",
    date: 'April 1, 2020',
    price: 5,
    positive: false
  },
  {
    id: 4,
    name: "Brett's Good Carpentry",
    date: 'Jan 29, 2020',
    price: 275,
    positive: true
  },
  {
    id: 5,
    name: "Brett's Bad Carpentry",
    date: 'November 24, 2020',
    price: 500,
    positive: true
  }
];

module.exports = {
  // Add route to get from certain date for dropdown
  getAllPastOrders() {
    return pastOrders;
  },
  getPastOrder(id) {
    return pastOrders.filter((pastOrder) => pastOrder.id === id);
  },
  getPastOrder(range) {},
  updateOrder(order) {
    for (let x = 0; x < pastOrders.length; x++) {
      if (order.id === pastOrders[x].id) {
        pastOrders[x] = order;
        break;
      }
    }
  }
};
