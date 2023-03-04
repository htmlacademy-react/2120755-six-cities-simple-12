
const roomOptions = ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'];
const cityList = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
const rating = new Map();
rating.set(5, 'perfect');
rating.set(4, 'good');
rating.set(3, 'not bad');
rating.set(2, 'badly');
rating.set(1, 'terribly');

export {
  roomOptions,
  cityList,
  rating
};
