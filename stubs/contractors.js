const { getContractorReviews } = require('./reviews');

let contractors = [
  {
    id: 1,
    category: 'carpentry',
    name: "Brett's Premium Carpentry",
    description: 'I am a premium carpenter.',
    phone: '545-213-3245',
    website: 'brettspremiumcarpentry.com',
    image: '../images/brett.jpg',
    stars: 4,
    price: 3
  },
  {
    id: 2,
    category: 'carpentry',
    name: "Brett's Mediocre Carpentry",
    description: 'I am a mediocre carpenter.',
    phone: '125-242-3515',
    website: 'brettsmediocrecarpentry.com',
    image: '../images/brett.jpg',
    stars: 4,
    price: 3
  },
  {
    id: 3,
    category: 'carpentry',
    name: "Brett's Budget Carpentry",
    description: 'I am a budget carpenter.',
    phone: '903-125-6932',
    website: 'brettsbudgetcarpentry.com',
    image: '../images/brett.jpg',
    stars: 3,
    price: 1
  },
  {
    id: 4,
    category: 'carpentry',
    name: "Brett's Bad Carpentry",
    description: 'I am a bad carpenter.',
    phone: '124-523-6547',
    website: 'brettsbadcarpentry.com',
    image: '../images/brett.jpg',
    stars: 3,
    price: 4
  },
  {
    id: 1,
    category: 'electrical',
    name: "Brett's Premium Electrical",
    description: 'I am a premium electrician.',
    phone: '545-213-3245',
    website: 'brettspremiumelectrical.com',
    image: '../images/brett.jpg',
    stars: 4,
    price: 3
  },
  {
    id: 2,
    category: 'electrical',
    name: "Brett's Mediocre Electrical",
    description: 'I am a mediocre electrician.',
    phone: '125-242-3515',
    website: 'brettsmediocreelectrical.com',
    image: '../images/brett.jpg',
    stars: 4,
    price: 3
  },
  {
    id: 3,
    category: 'electrical',
    name: "Brett's Budget Electrical",
    description: 'I am a budget electrician.',
    phone: '903-125-6932',
    website: 'brettsbudgetelectrical.com',
    image: '../images/brett.jpg',
    stars: 3,
    price: 1
  },
  {
    id: 4,
    category: 'electrical',
    name: "Brett's Bad Electrical",
    description: 'I am a bad electrician.',
    phone: '124-523-6547',
    website: 'brettsbadelectrical.com',
    image: '../images/brett.jpg',
    stars: 3,
    price: 4
  },
  {
    id: 1,
    category: 'roofing',
    name: "Brett's Premium Roofing",
    description: 'I am a premium roofer.',
    phone: '545-213-3245',
    website: 'brettspremiumroofing.com',
    image: '../images/brett.jpg',
    stars: 4,
    price: 3
  },
  {
    id: 2,
    category: 'roofing',
    name: "Brett's Mediocre Roofing",
    description: 'I am a mediocre roofer.',
    phone: '125-242-3515',
    website: 'brettsmediocreroofing.com',
    image: '../images/brett.jpg',
    stars: 4,
    price: 3
  },
  {
    id: 3,
    category: 'roofing',
    name: "Brett's Budget Roofing",
    description: 'I am a budget roofer.',
    phone: '903-125-6932',
    website: 'brettsbudgetroofing.com',
    image: '../images/brett.jpg',
    stars: 3,
    price: 1
  },
  {
    id: 4,
    category: 'roofing',
    name: "Brett's Bad Roofing",
    description: 'I am a bad roofer.',
    phone: '124-523-6547',
    website: 'brettsbadroofing.com',
    image: '../images/brett.jpg',
    stars: 3,
    price: 4
  },
  {
    id: 1,
    category: 'plumbing',
    name: "Brett's Premium Plumbing",
    description: 'I am a premium plumber.',
    phone: '545-213-3245',
    website: 'brettspremiumplumbing.com',
    image: '../images/brett.jpg',
    stars: 4,
    price: 3
  },
  {
    id: 2,
    category: 'plumbing',
    name: "Brett's Mediocre Plumbing",
    description: 'I am a mediocre plumber.',
    phone: '125-242-3515',
    website: 'brettsmediocreplumbing.com',
    image: '../images/brett.jpg',
    stars: 4,
    price: 3
  },
  {
    id: 3,
    category: 'plumbing',
    name: "Brett's Budget Plumbing",
    description: 'I am a budget plumber.',
    phone: '903-125-6932',
    website: 'brettsbudgetplumbing.com',
    image: '../images/brett.jpg',
    stars: 3,
    price: 1
  },
  {
    id: 4,
    category: 'plumbing',
    name: "Brett's Bad Plumbing",
    description: 'I am a bad plumber.',
    phone: '124-523-6547',
    website: 'brettsbadplumbing.com',
    image: '../images/brett.jpg',
    stars: 3,
    price: 4
  },
  {
    id: 1,
    category: 'HVAC',
    name: "Brett's Premium HVAC",
    description: 'I am a premium HVAC guy.',
    phone: '545-213-3245',
    website: 'brettspremiumhvac.com',
    image: '../images/brett.jpg',
    stars: 4,
    price: 3
  },
  {
    id: 2,
    category: 'HVAC',
    name: "Brett's Mediocre HVAC",
    description: 'I am a mediocre HVAC guy.',
    phone: '125-242-3515',
    website: 'brettsmediocrehvac.com',
    image: '../images/brett.jpg',
    stars: 4,
    price: 3
  },
  {
    id: 3,
    category: 'HVAC',
    name: "Brett's Budget HVAC",
    description: 'I am a budget HVAC guy.',
    phone: '903-125-6932',
    website: 'brettsbudgethvac.com',
    image: '../images/brett.jpg',
    stars: 3,
    price: 1
  },
  {
    id: 4,
    category: 'HVAC',
    name: "Brett's Bad HVAC",
    description: 'I am a bad HVAC guy.',
    phone: '124-523-6547',
    website: 'brettsbadhvac.com',
    image: '../images/brett.jpg',
    stars: 3,
    price: 4
  }
];

const setStars = () => {
  contractors.forEach((contractor) => {
    let reviews = getContractorReviews(contractor.name);
    if (reviews.length !== 0) {
      let totalStars = 0;
      reviews.forEach((review) => (totalStars += review.stars));
      contractor.stars = totalStars / reviews.length;
    } else {
      contractor.stars = 0;
    }
  });
};

module.exports = {
  getAllContractors() {
    setStars();
    return contractors;
  },
  getContractors(category) {
    setStars();
    return contractors.filter(
      (contractor) =>
        contractor.category.toLowerCase() === category.toLowerCase()
    );
  }
};
