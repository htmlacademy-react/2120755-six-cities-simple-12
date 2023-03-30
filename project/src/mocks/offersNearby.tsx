export type Offer =
  {
    bedrooms: number;
    city: {
      location: {
        latitude: number;
        longitude: number;
        zoom: number;
    };
      name: string;
    };
    description: string;
    goods: [...string[]];
    host: {
      avatarUrl: string;
      id: number;
      isPro: boolean;
      name: string;
    };
    id: number;
    images: [...string[]];
    isPremium: boolean;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
    maxAdults: number;
    previewImage: string;
    price: number;
    rating: number;
    title: string;
    type: string;
    }

export const offersNearby: [Offer, Offer, Offer, ...Offer[]] =
    [
      {
        'city': {
          'name': 'Amsterdam',
          'location': {
            'latitude': 52.37454,
            'longitude': 4.897976,
            'zoom': 13
          }
        },
        'previewImage': 'https://12.react.pages.academy/static/hotel/10.jpg',
        'images': [
          'https://12.react.pages.academy/static/hotel/17.jpg',
          'https://12.react.pages.academy/static/hotel/8.jpg',
          'https://12.react.pages.academy/static/hotel/3.jpg',
          'https://12.react.pages.academy/static/hotel/14.jpg',
          'https://12.react.pages.academy/static/hotel/1.jpg',
          'https://12.react.pages.academy/static/hotel/9.jpg',
          'https://12.react.pages.academy/static/hotel/13.jpg',
          'https://12.react.pages.academy/static/hotel/5.jpg',
          'https://12.react.pages.academy/static/hotel/2.jpg',
          'https://12.react.pages.academy/static/hotel/20.jpg',
          'https://12.react.pages.academy/static/hotel/6.jpg',
          'https://12.react.pages.academy/static/hotel/10.jpg',
          'https://12.react.pages.academy/static/hotel/19.jpg',
          'https://12.react.pages.academy/static/hotel/11.jpg'
        ],
        'title': 'The Joshua Tree House',
        'isPremium': false,
        'rating': 3.4,
        'type': 'apartment',
        'bedrooms': 3,
        'maxAdults': 6,
        'price': 324,
        'goods': [
          'Breakfast',
          'Fridge',
          'Laptop friendly workspace',
          'Washing machine',
          'Washer',
          'Air conditioning',
          'Towels',
          'Baby seat',
          'Dishwasher',
          'Coffee machine'
        ],
        'host': {
          'id': 25,
          'name': 'Angelina',
          'isPro': true,
          'avatarUrl': 'img/avatar-angelina.jpg'
        },
        'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
        'location': {
          'latitude': 52.35754,
          'longitude': 4.9179759999999995,
          'zoom': 16
        },
        'id': 23
      },
      {
        'city': {
          'name': 'Amsterdam',
          'location': {
            'latitude': 52.37454,
            'longitude': 4.897976,
            'zoom': 13
          }
        },
        'previewImage': 'https://12.react.pages.academy/static/hotel/12.jpg',
        'images': [
          'https://12.react.pages.academy/static/hotel/17.jpg',
          'https://12.react.pages.academy/static/hotel/8.jpg',
          'https://12.react.pages.academy/static/hotel/2.jpg',
          'https://12.react.pages.academy/static/hotel/16.jpg',
          'https://12.react.pages.academy/static/hotel/15.jpg',
          'https://12.react.pages.academy/static/hotel/9.jpg',
          'https://12.react.pages.academy/static/hotel/13.jpg',
          'https://12.react.pages.academy/static/hotel/11.jpg',
          'https://12.react.pages.academy/static/hotel/14.jpg',
          'https://12.react.pages.academy/static/hotel/4.jpg',
          'https://12.react.pages.academy/static/hotel/7.jpg',
          'https://12.react.pages.academy/static/hotel/1.jpg',
          'https://12.react.pages.academy/static/hotel/12.jpg',
          'https://12.react.pages.academy/static/hotel/20.jpg'
        ],
        'title': 'Nice, cozy, warm big bed apartment',
        'isPremium': true,
        'rating': 4.6,
        'type': 'room',
        'bedrooms': 1,
        'maxAdults': 1,
        'price': 261,
        'goods': [
          'Washer',
          'Breakfast',
          'Air conditioning',
          'Laptop friendly workspace'
        ],
        'host': {
          'id': 25,
          'name': 'Angelina',
          'isPro': true,
          'avatarUrl': 'img/avatar-angelina.jpg'
        },
        'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
        'location': {
          'latitude': 52.36354,
          'longitude': 4.911976,
          'zoom': 16
        },
        'id': 67
      },
      {
        'city': {
          'name': 'Amsterdam',
          'location': {
            'latitude': 52.37454,
            'longitude': 4.897976,
            'zoom': 13
          }
        },
        'previewImage': 'https://12.react.pages.academy/static/hotel/14.jpg',
        'images': [
          'https://12.react.pages.academy/static/hotel/16.jpg',
          'https://12.react.pages.academy/static/hotel/6.jpg',
          'https://12.react.pages.academy/static/hotel/17.jpg',
          'https://12.react.pages.academy/static/hotel/19.jpg',
          'https://12.react.pages.academy/static/hotel/14.jpg',
          'https://12.react.pages.academy/static/hotel/2.jpg',
          'https://12.react.pages.academy/static/hotel/5.jpg',
          'https://12.react.pages.academy/static/hotel/11.jpg',
          'https://12.react.pages.academy/static/hotel/13.jpg',
          'https://12.react.pages.academy/static/hotel/9.jpg',
          'https://12.react.pages.academy/static/hotel/10.jpg',
          'https://12.react.pages.academy/static/hotel/12.jpg',
          'https://12.react.pages.academy/static/hotel/20.jpg',
          'https://12.react.pages.academy/static/hotel/15.jpg'
        ],
        'title': 'Waterfront with extraordinary view',
        'isPremium': false,
        'rating': 3.5,
        'type': 'apartment',
        'bedrooms': 4,
        'maxAdults': 7,
        'price': 386,
        'goods': [
          'Washing machine',
          'Towels',
          'Coffee machine',
          'Laptop friendly workspace',
          'Baby seat',
          'Breakfast',
          'Dishwasher',
          'Washer',
          'Air conditioning',
          'Fridge'
        ],
        'host': {
          'id': 25,
          'name': 'Angelina',
          'isPro': true,
          'avatarUrl': 'img/avatar-angelina.jpg'
        },
        'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
        'location': {
          'latitude': 52.36554,
          'longitude': 4.911976,
          'zoom': 16
        },
        'id': 21
      }
    ];
