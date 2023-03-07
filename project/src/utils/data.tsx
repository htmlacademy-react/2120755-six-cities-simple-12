
const options = ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'];
const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
const rating = {
  1:'terribly',
  2:'badly',
  3:'not bad',
  4:'good',
  5:'perfect',
};
// В изначальном разметке 2 раза повторяется "img/apartment-01.jpg"
// В проекте 5 уникальных фотографий. Не хватает 'img/apartment-04.jpg', но есть уникальная 'img/apartment-small-04.jpg'
// Использовал ее чтобы небыло повторения ключа в компоненте.
// Если так и было задумано, я могу оставить как есть и сделать ключи на индексах.
const photosSources = [
  'img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-small-04.jpg'
];
export {
  options,
  cities,
  rating,
  photosSources
};

