// Как ревью привязать к предложению, я не понимаю.
type Review = {
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

const reviewList: [Review, ...Review[]] = [
  {
    'id': 1,
    'user': {
      'id': 15,
      'isPro': false,
      'name': 'Kendall',
      'avatarUrl': 'https://12.react.pages.academy/static/avatar/6.jpg'
    },
    'rating': 2,
    'comment': 'Bathed in the nature. Completely unplugged. Unforgettable.',
    'date': '2023-02-19T07:31:24.880Z'
  },
  {
    'id': 1,
    'user': {
      'id': 13,
      'isPro': false,
      'name': 'Zak',
      'avatarUrl': 'https://12.react.pages.academy/static/avatar/4.jpg'
    },
    'rating': 5,
    'comment': 'Bathed in the nature. Completely unplugged. Unforgettable.',
    'date': '2023-02-09T07:31:24.881Z'
  }
];

export default reviewList;
