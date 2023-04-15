import { CityData } from '@customTypes/index';

const sortTypes = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

const rating = {
  1:'terribly',
  2:'badly',
  3:'not bad',
  4:'good',
  5:'perfect',
};

const citiesData: CityData = {
  Paris: {
    'latitude': 48.85661,
    'longitude': 2.351499,
    'zoom': 13
  },
  Cologne: {
    'latitude': 50.938361,
    'longitude': 6.959974,
    'zoom': 13
  },
  Brussels: {
    'latitude': 50.846557,
    'longitude': 4.351697,
    'zoom': 13
  },
  Amsterdam: {
    'latitude': 52.37454,
    'longitude': 4.897976,
    'zoom': 13
  },
  Hamburg: {
    'latitude': 53.550341,
    'longitude': 10.000654,
    'zoom': 13
  },
  Dusseldorf: {
    'latitude': 51.225402,
    'longitude': 6.776314,
    'zoom': 13
  }};

export {
  citiesData,
  sortTypes,
  rating,
};
