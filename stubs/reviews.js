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
    contractor: "Brett's Mediocre Carpentry",
    reviewer: 'Jordan Portz',
    date: 'November 24, 2020',
    stars: 2,
    body: 'Too expensive for the services he offers. Would not recommend.'
  },
  {
    contractor: "Brett's Mediocre Carpentry",
    reviewer: 'Jordan Portz',
    date: 'April 1, 2020',
    stars: 4,
    body: 'The work is perfect but it takes him a long time.'
  },
  {
    contractor: "Brett's Budget Carpentry",
    reviewer: 'Viki Makadia',
    date: 'April 1, 2020',
    stars: 4,
    body:
      'He does great work in a very cost effective way. He also provices the latest carpentry designs out there.'
  },
  {
    contractor: "Brett's Budget Carpentry",
    reviewer: 'Garry Smith',
    date: 'April 30, 2020',
    stars: 3,
    body:
      'He is very cost effective and quality is not compromised. Would highly recommend. '
  },
  {
    contractor: "Brett's Budget Carpentry",
    reviewer: 'Joe Brown',
    date: 'May 2, 2020',
    stars: 4,
    body: 'High quality and finishes the work in time.'
  },
  {
    contractor: "Brett's Bad Carpentry",
    reviewer: 'Viki Makadia',
    date: 'May 20, 2020',
    stars: 2,
    body: 'Very expensive for the kind of services being provided'
  },
  {
    contractor: "Brett's Bad Carpentry",
    reviewer: 'Caden Chabot',
    date: 'April 20, 2020',
    stars: 1,
    body:
      'He tends to postpone most deadlines, always having an excuse for it. He is also very expensive.'
  },
  {
    contractor: "Brett's Mediocre Electrical",
    reviewer: 'Rob Guderian',
    date: 'Jan 20, 2020',
    stars: 3,
    body: 'Brett and his team were friendly, timely and professional.'
  },
  {
    contractor: "Brett's Mediocre Electrical",
    reviewer: 'Rob Guderian',
    date: 'Jan 20, 2020',
    stars: 2,
    body: 'Only cost me 5 dollars, but he did 5000 dollars in damage...'
  },
  {
    contractor: "Brett's Mediocre Electrical",
    reviewer: 'Richard Thomas',
    date: 'Jan 20, 2020',
    stars: 4,
    body:
      'Provided suggestions that worked out really well and made a difference. He was very easy to work with.'
  },
  {
    contractor: "Brett's Budget Electrical",
    reviewer: 'Mike Jackson',
    date: 'Jan 26, 2020',
    stars: 3,
    body: 'He will moderate his quality depending on what you pay him.'
  },
  {
    contractor: "Brett's Budget Electrical",
    reviewer: 'Sam Xu',
    date: 'Jan 20, 2020',
    stars: 3,
    body:
      'Did a very great job. He finished the project 3 days ahead of the schedule. His services were quite expensive, but worth it!!'
  },
  {
    contractor: "Brett's Bad Electrical",
    reviewer: 'Scott Jackson',
    date: 'Feb 21, 2020',
    stars: 2,
    body:
      'I hired him to install lighting at my shop and he did not come with his own tools despite advertising as bringing his own tools.'
  },
  {
    contractor: "Brett's Bad Electrical",
    reviewer: 'Ben Lee',
    date: 'March 21, 2020',
    stars: 3,
    body: 'He is average.'
  },
  {
    contractor: " Brett's Premium Roofing",
    reviewer: 'Amie William',
    date: 'April 21, 2020',
    stars: 4,
    body: 'Very professional team and friendly. Would highly recommend.'
  },
  {
    contractor: "Brett's Mediocre Roofing",
    reviewer: 'Edie Lopez',
    date: 'December 21, 2020',
    stars: 4,
    body: 'Brett was professional friendly and answer all our questions.'
  },
  {
    contractor: "Brett's Mediocre Roofing",
    reviewer: 'Blaine Salas',
    date: 'January 21, 2020',
    stars: 4,
    body:
      'Fellas were very professional, fast, efficient and friendly. I would recommend them to all my friends.'
  },
  {
    contractor: "Brett's Budget Roofing",
    reviewer: 'Connar Burke',
    date: 'March 21, 2020',
    stars: 4,
    body:
      'Gave us the best quote and had a professional attitude and knowledge throughout the project.'
  },
  {
    contractor: "Brett's Budget Roofing",
    reviewer: 'Caitlin Hooper',
    date: 'March 21, 2020',
    stars: 5,
    body: 'Very good price for the wonderful roofing services provided.'
  },
  {
    contractor: "Brett's Bad Roofing",
    reviewer: 'Kelly Howe',
    date: 'May 21, 2020',
    stars: 1,
    body: 'Left the work unfinished. Wasted alot of my time and money.'
  },
  {
    contractor: "Brett's Premium Plumbing",
    reviewer: 'Tanya Robertson',
    date: 'September 21, 2020',
    stars: 4,
    body:
      'Excellent quality work, professional service and a competitive price.'
  },
  {
    contractor: "Brett's Premium Plumbing",
    reviewer: 'Andrea Barton',
    date: 'September 21, 2020',
    stars: 4,
    body:
      'He and his staff arrived when they said they would, got right to work, very polite, and very professional.'
  },
  {
    contractor: "Brett's Mediocre Plumbing",
    reviewer: 'Kristina Stevens',
    date: 'November 21, 2020',
    stars: 2,
    body: 'Quality work but did not have quick responses.'
  },
  {
    contractor: "Brett's Budget Plumbing",
    reviewer: 'Wayne Cousins',
    date: 'April 21, 2020',
    stars: 4,
    body:
      'I highly recommend to the company in terms of service, quality of service and price.'
  },
  {
    contractor: "Brett's Bad Plumbing",
    reviewer: 'Vinnie Dawson',
    date: 'March 21, 2020',
    stars: 1,
    body:
      'Very poor quality of work. I had a pipe burst just two after the fix in the same spot.'
  },
  {
    contractor: "Brett's Premium HVAC",
    reviewer: 'Jade Wilcox',
    date: 'March 21, 2020',
    stars: 5,
    body:
      'They were able to accommodate the reno around my husbands health issues. The quality is great too. Would highly recommend.'
  },
  {
    contractor: "Brett's Premium HVAC",
    reviewer: 'Pam Mckee',
    date: 'November 11, 2020',
    stars: 5,
    body:
      'I am satisfied with all of the work that was done. The team provided prompt answers to my many questions during the reno. I felt that they really cared about my home.'
  },
  {
    contractor: "Brett's Budget HVAC",
    reviewer: 'Andrew Tyson',
    date: 'June 11, 2020',
    stars: 4,
    body:
      'Their pricing for the projects seemed fair, I can recommend this company to others.'
  },
  {
    contractor: "Brett's Budget HVAC",
    reviewer: 'Pam Mckee',
    date: 'November 21, 2020',
    stars: 3,
    body:
      'They listen, they care, they bring in trustworthy and solid professionals for specific tasks.'
  },
  {
    contractor: "Brett's Bad HVAC",
    reviewer: 'Tiah White',
    date: 'December 20, 2020',
    stars: 2,
    body: 'Not very professional. Not friendly.'
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
  getReviewsByUser(reviewer) {
    return reviews.filter(
      (review) => review.reviewer.toLowerCase === reviewer.toLowerCase
    );
  },
  addReview(reviewer, contractor, stars, body) {
    reviews.push({
      contractor: contractor,
      reviewer: reviewer,
      date: 'March 21, 2021',
      stars: stars,
      body: body
    });
  }
};
