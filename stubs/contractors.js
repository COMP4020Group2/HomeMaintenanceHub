const { getContractorReviews } = require('./reviews');

let contractors = [
  {
    id: 1,
    category: 'carpentry',
    name: "Brett's Carpentry",
    description: 'I am a premium carpenter.',
    phone: '545-213-3245',
    website: 'brettscarpentry.com',
    image: '../images/brett.jpg',
    stars: 4,
    price: 3
  },
  {
    id: 2,
    category: 'carpentry',
    name: "Phil's Custom Carpentry",
    description: 'I offer custom carpentry jobs.',
    phone: '125-242-3515',
    website: 'philscustomrecarpentry.com',
    image: '../images/brett.jpg',
    stars: 4,
    price: 3
  },
  {
    id: 3,
    category: 'carpentry',
    name: "Jacob's Carpentry",
    description: 'I am a budget carpenter.',
    phone: '903-125-6932',
    website: 'jacobscarpentry.com',
    image: '../images/brett.jpg',
    stars: 3,
    price: 1
  },
  {
    id: 4,
    category: 'carpentry',
    name: "Mack's Carpentry",
    description: 'I am a local independent carpenter.',
    phone: '124-523-6547',
    website: 'mackscarpentry.com',
    image: '../images/brett.jpg',
    stars: 3,
    price: 4
  },
  {
    id: 1,
    category: 'electrical',
    name: "Brett's Electrical",
    description: 'I am a premium electrician.',
    phone: '545-213-3245',
    website: 'brettselectrical.com',
    image: '../images/brett.jpg',
    stars: 4,
    price: 3
  },
  {
    id: 2,
    category: 'electrical',
    name: "Phil's Custom Electrical",
    description: 'I professional custom electrician.',
    phone: '125-242-3515',
    website: 'philscustomelectrical.com',
    image: '../images/brett.jpg',
    stars: 4,
    price: 3
  },
  {
    id: 3,
    category: 'electrical',
    name: "Jacob's Electrical",
    description: 'I am a budget electrician.',
    phone: '903-125-6932',
    website: 'jacobselectrical.com',
    image: '../images/brett.jpg',
    stars: 3,
    price: 1
  },
  {
    id: 4,
    category: 'electrical',
    name: "Mack's Electrical",
    description: 'I a local certified electrician.',
    phone: '124-523-6547',
    website: 'mackselectrical.com',
    image: '../images/brett.jpg',
    stars: 3,
    price: 4
  },
  {
    id: 1,
    category: 'roofing',
    name: "Brett's Roofing",
    description: 'I am a premium roofer.',
    phone: '545-213-3245',
    website: 'brettsroofing.com',
    image: '../images/brett.jpg',
    stars: 4,
    price: 3
  },
  {
    id: 2,
    category: 'roofing',
    name: "Phil's Custom Roofing",
    description: 'I am red seal certified roofer.',
    phone: '125-242-3515',
    website: 'philscustomroofing.com',
    image: '../images/brett.jpg',
    stars: 4,
    price: 3
  },
  {
    id: 3,
    category: 'roofing',
    name: "Jacob's Roofing",
    description: 'I am a high quality budget roofer.',
    phone: '903-125-6932',
    website: 'jacobsroofing.com',
    image: '../images/brett.jpg',
    stars: 3,
    price: 1
  },
  {
    id: 4,
    category: 'roofing',
    name: "Mack's Roofing",
    description: 'I am a reputable local roofer.',
    phone: '124-523-6547',
    website: 'macksroofing.com',
    image: '../images/brett.jpg',
    stars: 3,
    price: 4
  },
  {
    id: 1,
    category: 'plumbing',
    name: "Brett's Plumbing",
    description: 'I am a premium plumber.',
    phone: '545-213-3245',
    website: 'brettsplumbing.com',
    image: '../images/brett.jpg',
    stars: 4,
    price: 3
  },
  {
    id: 2,
    category: 'plumbing',
    name: "Phil's Custom Plumbing",
    description: 'I am a world famous plumber.',
    phone: '125-242-3515',
    website: 'philscustomplumbing.com',
    image: '../images/brett.jpg',
    stars: 4,
    price: 3
  },
  {
    id: 3,
    category: 'plumbing',
    name: "Jacob's Plumbing",
    description: 'I am the best plumber in town.',
    phone: '903-125-6932',
    website: 'jacobsplumbing.com',
    image: '../images/brett.jpg',
    stars: 3,
    price: 1
  },
  {
    id: 4,
    category: 'plumbing',
    name: "Mack's Plumbing",
    description: 'I am a red seal certified plumber.',
    phone: '124-523-6547',
    website: 'macksplumbing.com',
    image: '../images/brett.jpg',
    stars: 3,
    price: 4
  },
  {
    id: 1,
    category: 'HVAC',
    name: "Brett's HVAC",
    description: 'I am a premium HVAC guy.',
    phone: '545-213-3245',
    website: 'brettshvac.com',
    image: '../images/brett.jpg',
    stars: 4,
    price: 3
  },
  {
    id: 2,
    category: 'HVAC',
    name: "Phil's Custom HVAC",
    description: 'I am a best in class HVAC guy.',
    phone: '125-242-3515',
    website: 'philscustomhvac.com',
    image: '../images/brett.jpg',
    stars: 4,
    price: 3
  },
  {
    id: 3,
    category: 'HVAC',
    name: "Jacob's HVAC",
    description: 'I am a high quality budget HVAC guy.',
    phone: '903-125-6932',
    website: 'jacobshvac.com',
    image: '../images/brett.jpg',
    stars: 3,
    price: 1
  },
  {
    id: 4,
    category: 'HVAC',
    name: "Mack's HVAC",
    description: 'I am a locally certified HVAC guy.',
    phone: '124-523-6547',
    website: 'mackshvac.com',
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
