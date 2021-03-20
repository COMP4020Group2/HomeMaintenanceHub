let contractors = [
  {
    id: 1,
    category_id: 1,
    name: "Brett's Premium Carpentry",
    description: 'I am a premium carpenter.',
    phone: '545-213-3245',
    website: 'brettspremiumcarpentry.com',
    stars: 4,
    price: 3
  },
  {
    id: 2,
    category_id: 1,
    name: "Brett's Mediocre Carpentry",
    description: 'I am a mediocre carpenter.',
    phone: '125-242-3515',
    website: 'brettsmediocrecarpentry.com',
    stars: 4,
    price: 3
  },
  {
    id: 3,
    category_id: 1,
    name: "Brett's Budget Carpentry",
    description: 'I am a budget carpenter.',
    phone: '903-125-6932',
    website: 'brettsbudgetcarpentry.com',
    stars: 3,
    price: 1
  },
  {
    id: 4,
    category_id: 1,
    name: "Brett's Bad Carpentry",
    description: 'I am a bad carpenter.',
    phone: '124-523-6547',
    website: 'brettsbadcarpentry.com',
    stars: 3,
    price: 4
  },
  {
    id: 1,
    category_id: 2,
    name: "Brett's Premium Electrical",
    description: 'I am a premium electrician.',
    phone: '545-213-3245',
    website: 'brettspremiumelectrical.com',
    stars: 4,
    price: 3
  },
  {
    id: 2,
    category_id: 2,
    name: "Brett's Mediocre Electrical",
    description: 'I am a mediocre electrician.',
    phone: '125-242-3515',
    website: 'brettsmediocreelectrical.com',
    stars: 4,
    price: 3
  },
  {
    id: 3,
    category_id: 2,
    name: "Brett's Budget Electrical",
    description: 'I am a budget electrician.',
    phone: '903-125-6932',
    website: 'brettsbudgetelectrical.com',
    stars: 3,
    price: 1
  },
  {
    id: 4,
    category_id: 2,
    name: "Brett's Bad Electrical",
    description: 'I am a bad electrician.',
    phone: '124-523-6547',
    website: 'brettsbadelectrical.com',
    stars: 3,
    price: 4
  },
  {
    id: 1,
    category_id: 3,
    name: "Brett's Premium Roofing",
    description: 'I am a premium roofer.',
    phone: '545-213-3245',
    website: 'brettspremiumroofing.com',
    stars: 4,
    price: 3
  },
  {
    id: 2,
    category_id: 3,
    name: "Brett's Mediocre Roofing",
    description: 'I am a mediocre roofer.',
    phone: '125-242-3515',
    website: 'brettsmediocreroofing.com',
    stars: 4,
    price: 3
  },
  {
    id: 3,
    category_id: 3,
    name: "Brett's Budget Roofing",
    description: 'I am a budget roofer.',
    phone: '903-125-6932',
    website: 'brettsbudgetroofing.com',
    stars: 3,
    price: 1
  },
  {
    id: 4,
    category_id: 3,
    name: "Brett's Bad Roofing",
    description: 'I am a bad roofer.',
    phone: '124-523-6547',
    website: 'brettsbadroofing.com',
    stars: 3,
    price: 4
  },
  {
    id: 1,
    category_id: 4,
    name: "Brett's Premium Plumbing",
    description: 'I am a premium plumber.',
    phone: '545-213-3245',
    website: 'brettspremiumplumbing.com',
    stars: 4,
    price: 3
  },
  {
    id: 2,
    category_id: 4,
    name: "Brett's Mediocre Plumbing",
    description: 'I am a mediocre plumber.',
    phone: '125-242-3515',
    website: 'brettsmediocreplumbing.com',
    stars: 4,
    price: 3
  },
  {
    id: 3,
    category_id: 4,
    name: "Brett's Budget Plumbing",
    description: 'I am a budget plumber.',
    phone: '903-125-6932',
    website: 'brettsbudgetplumbing.com',
    stars: 3,
    price: 1
  },
  {
    id: 4,
    category_id: 4,
    name: "Brett's Bad Plumbing",
    description: 'I am a bad plumber.',
    phone: '124-523-6547',
    website: 'brettsbadplumbing.com',
    stars: 3,
    price: 4
  },
  {
    id: 1,
    category_id: 5,
    name: "Brett's Premium HVAC",
    description: 'I am a premium HVAC guy.',
    phone: '545-213-3245',
    website: 'brettspremiumhvac.com',
    stars: 4,
    price: 3
  },
  {
    id: 2,
    category_id: 5,
    name: "Brett's Mediocre HVAC",
    description: 'I am a mediocre HVAC guy.',
    phone: '125-242-3515',
    website: 'brettsmediocrehvac.com',
    stars: 4,
    price: 3
  },
  {
    id: 3,
    category_id: 5,
    name: "Brett's Budget HVAC",
    description: 'I am a budget HVAC guy.',
    phone: '903-125-6932',
    website: 'brettsbudgethvac.com',
    stars: 3,
    price: 1
  },
  {
    id: 4,
    category_id: 5,
    name: "Brett's Bad HVAC",
    description: 'I am a bad HVAC guy.',
    phone: '124-523-6547',
    website: 'brettsbadhvac.com',
    stars: 3,
    price: 4
  }
];

module.exports = {
  getAllContractors() {
    return contractors;
  },
  getAllCarpentry() {
    return contractors.filter((contractor) => contractor.category_id === 1);
  },
  getAllElectrical() {
    return contractors.filter((contractor) => contractor.category_id === 2);
  },
  getAllRoofing() {
    return contractors.filter((contractor) => contractor.category_id === 3);
  },
  getAllPlumbing() {
    return contractors.filter((contractor) => contractor.category_id === 4);
  },
  getAllHVAC() {
    return contractors.filter((contractor) => contractor.category_id === 5);
  }
};
