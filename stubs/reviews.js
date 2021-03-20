let reviews = [
  {
    "contractor_id": 1,
    "contractor": "Brett's Premium Carpentry",
    "user": "Jordan Portz",
    "date": "July 9, 2020",
    "stars": "4",
    "description": "Great work, but a little slow."
  },
  {
    "contractor_id": 1,
    "contractor": "Brett's Premium Carpentry",
    "user": "Caden Chabot",
    "date": "May 14, 2021",
    "stars": "3",
    "description": "I wouldn't say premium but he does good enough work."
  },
  {
    "contractor_id": 1,
    "contractor": "Brett's Premium Carpentry",
    "user": "Carl Wiebe",
    "date": "March 19, 2021",
    "stars": "5",
    "description": "Brett is a great carpenter, I would highly recommend."
  },
  {
    "contractor_id": 4,
    "contractor": "Brett's Bad Carpentry",
    "user": "Jordan Portz",
    "date": "November 24, 2020",
    "stars": "2",
    "description": "How does he charge this much for such poor service?"
  },
  {
    "contractor_id": 3,
    "contractor": "Brett's Budget Carpentry",
    "user": "Jordan Portz",
    "date": "April 1, 2020",
    "stars": "5",
    "description": "Only cost me 5 dollars, but he did 5000 dollars in damage..."
  }
];

module.exports = {
  getAllReviews() {
    return reviews;
  },
};