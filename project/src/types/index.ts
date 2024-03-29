export type Offer = {
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
  goods: string[];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
    };
  id: number;
  images: string[];
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

export type ReviewObject = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
  };}

export type Review = {
  comment: string;
  rating: string;
  id: number;
};

export type LoginData = {
  email: string;
  password: string;
}

export type UserData = {
  avatarUrl: string;
  email: string;
  id: number;
  isPro: boolean;
  name: string;
  token: string;
}

export type CityLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type CityData = {
  [key: string]: CityLocation;
};
