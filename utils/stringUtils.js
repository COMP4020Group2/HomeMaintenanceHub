export const buildStars = (numStars) => {
  let stars = '';
  for (let i = 0; i < numStars; i++) stars += '★';
  for (let i = numStars; i < 5; i++) stars += '☆';
  return stars;
};

export const buildDollars = (numDollars) => {
  let dollars = '';
  for (let i = 0; i < numDollars; i++) dollars += '$';
  return dollars;
};
