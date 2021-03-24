let pastOrders = [
  {
    id: 1,
    name: "Brett's Premium Carpentry",
    date: 'Jul 9, 2020',
    job: 'Deck',
    price: 2200,
    positive: true
  },
  {
    id: 2,
    name: "Brett's Mediocre Carpentry",
    date: 'Jun 18, 2020',
    job: 'Shelving Installation',
    price: 225,
    positive: false
  },
  {
    id: 3,
    name: "Brett's Budget Carpentry",
    date: 'Apr 1, 2020',
    job: 'Flooring',
    price: 5,
    positive: false
  },
  {
    id: 4,
    name: "Brett's Good Carpentry",
    date: 'Jan 29, 2020',
    job: 'Wall Construction',
    price: 275,
    positive: true
  },
  {
    id: 5,
    name: "Brett's Bad Carpentry",
    date: 'Nov 24, 2020',
    job: 'Deck',
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
