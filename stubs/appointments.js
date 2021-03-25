let appointments = [
  {
    id: 1,
    name: "Brett's Carpentry",
    date: 'July 9, 2021',
    time: '11:00am - 12:00 PM',
    description: 'Quote'
  },
  {
    id: 2,
    name: "Phils Custom Carpentry",
    date: 'June 18, 2021',
    time: '11:00am - 12:00 PM',
    description: 'Quote'
  },
  {
    id: 3,
    name: "Jacobs Carpentry",
    date: 'April 1, 2021',
    time: '11:00am - 12:00 PM',
    description: 'Quote'
  }
];

let nextId = 4;

module.exports = {
  getAllAppointments() {
    return appointments;
  },
  addAppointment(appointment) {
    appointment.id = nextId;
    nextId++;
    appointments.push(appointment);
  }
};
