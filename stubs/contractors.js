let contractors = [
  {
    "id": 1,
    "category_id": 1,
    "name": "Brett's Premium Carpentry",
    "description": "I am a premium carpenter.",
    "phone": "545-213-3245",
    "website": "brettspremiumcarpentry.com",
    "stars": 4,
    "price": 3
  },
  {
    "id": 2,
    "category_id": 1,
    "name": "Brett's Mediocre Carpentry",
    "description": "I am a mediocre carpenter.",
    "phone": "125-242-3515",
    "website": "brettsmediocrecarpentry.com",
    "stars": 4,
    "price": 3
  },
  {
    "id": 3,
    "category_id": 1,
    "name": "Brett's Budget Carpentry",
    "description": "I am a budget carpenter.",
    "phone": "903-125-6932",
    "website": "brettsbudgetcarpentry.com",
    "stars": 3,
    "price": 1
  },
  {
    "id": 4,
    "category_id": 1,
    "name": "Brett's Bad Carpentry",
    "description": "I am a bad carpenter.",
    "phone": "124-523-6547",
    "website": "brettsbadcarpentry.com",
    "stars": 3,
    "price": 4
  }
];

module.exports = {
  getAllContractors() {
    return contractors;
  },
};