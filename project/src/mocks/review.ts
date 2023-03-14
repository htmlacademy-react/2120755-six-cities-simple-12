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
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'date': 'Tue Mar 14 2023 12:53:35 GMT+0200 (Израиль, стандартное время)',
    'id': 1,
    'rating': 4,
    'user': {
      'avatarUrl': 'img/1.png',
      'id': 1,
      'isPro': false,
      'name': 'Oliver.conner'
    }}
];

export default reviewList;
