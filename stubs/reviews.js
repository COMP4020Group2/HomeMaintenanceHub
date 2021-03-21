let reviews = [
  {
    contractor: "Brett's Premium Carpentry",
    reviewer: 'Jordan Portz',
    date: 'July 9, 2020',
    stars: 4,
    body: 'Great work, but a little slow.'
  },
  {
    contractor: "Brett's Premium Carpentry",
    reviewer: 'Caden Chabot',
    date: 'May 14, 2021',
    stars: 3,
    body: "I wouldn't say premium but he does good enough work."
  },
  {
    contractor: "Brett's Premium Carpentry",
    reviewer: 'Carl Wiebe',
    date: 'March 19, 2021',
    stars: 5,
    body: 'Brett is a great carpenter, I would highly recommend.'
  },
  {
    contractor: "Brett's Bad Carpentry",
    reviewer: 'Jordan Portz',
    date: 'November 24, 2020',
    stars: 2,
    body: 'How does he charge this much for such poor service?'
  },
  {
    contractor: "Brett's Budget Carpentry",
    reviewer: 'Jordan Portz',
    date: 'April 1, 2020',
    stars: 5,
    body: 'Only cost me 5 dollars, but he did 5000 dollars in damage...'
  }
];

module.exports = {
  getAllReviews() {
    return reviews;
  },
  getContractorReviews(contractor) {
    return reviews.filter(
      (review) => review.contractor.toLowerCase() === contractor.toLowerCase()
    );
  },
  getUserReviews(reviewer) {
    return reviews.filter(
      (review) => review.reviewer.toLowerCase() === reviewer.toLowerCase()
    );
  },
  getUserContractorReview(reviewer, contractor) {
    return reviews.filter(
      (review) =>
        review.reviewer.toLowerCase() === reviewer.toLowerCase() &&
        review.contractor.toLowerCase() === contractor.toLowerCase()
    );
  },
  getReviewsByUser(reviewer){
    return reviews.filter(
      (review) =>
        review.reviewer.toLowerCase === reviewer.toLowerCase
    );
  }
};
