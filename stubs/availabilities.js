let availabilities = [
  {
    "time": "11:00am - 12:00pm",
    "type": "Quote"
  },
  {
    "time": "1:00pm - 2:00pm",
    "type": "Quote"
  },
  {
    "time": "3:00pm - 4:00pm",
    "type": "Quote"
  },
];

module.exports = {
  getAvailabilities(date) {
    let day1 = date.toISOString().split('T')[0]; 
    date.setDate(date.getDate() + 1);
    let day2 = date.toISOString().split('T')[0];
    date.setDate(date.getDate() + 1);
    let day3 = date.toISOString().split('T')[0]; 
    date.setDate(date.getDate() + 1);
    let day4 = date.toISOString().split('T')[0]; 
    date.setDate(date.getDate() + 1);
    let day5 = date.toISOString().split('T')[0]; 
    return { 
      [day1]: availabilities,
      [day2]: availabilities,
      [day3]: availabilities,
      [day4]: availabilities,
      [day5]: availabilities,
    };
  }
}