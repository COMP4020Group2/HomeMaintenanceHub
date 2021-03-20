let appointments = [
  {
    id: 1,
    name: "Brett's Premium Carpentry",
    date: 'July 9, 2021',
    time: '12:00 PM',
    description: 'Quote'
  },
  {
    id: 2,
    name: "Brett's Mediocre Carpentry",
    date: 'June 18, 2021',
    time: '12:00 PM',
    description: 'Quote'
  },
  {
    id: 3,
    name: "Brett's Budget Carpentry",
    date: 'April 1, 2021',
    time: '12:00 PM',
    description: 'Quote'
  }
];

module.exports = {
  getAllAppointments() {
    return appointments;
  }
};
