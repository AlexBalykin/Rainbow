const arrStr = [
  'КРАСНЫЙ',
  'ЗЕЛЁНЫЙ',
  'СИНИЙ',
  'ЖЁЛТЫЙ',
  'ОРАНЖЕВЫЙ',
  'ФИОЛЕТОВЫЙ',
  'ГОЛУБОЙ',
  'ХЛОПОК',
];
const arrColor = [
  '#F44336',
  '#00a651',
  '#2772DB',
  '#fee14c',
  '#F9A828',
  '#C264FE',
  '#93B4F5',
];

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomColor = () => {
  const сolor = getRandomNum(0, arrColor.length - 1);
  const colorFon = getRandomNum(0, arrColor.length - 1);
  if (сolor === colorFon) {
    return colorFon;
  }
  // document.getElementById('style').style.color = arrColor[сolor]; (Меняет цвет текста)
  document.getElementById('style') // Возвращает ссылку на элемент по его идентификатору
    .style.backgroundColor = arrColor[colorFon]; // Устанавливаем цвет фона элемента

  return arrColor[colorFon];
};

const getRandomPosition = () => {
  const maxWidth = window.innerWidth - 180;
  const maxHeight = window.innerHeight - 50;
  const elemId = document.getElementById('style');
  elemId.style.left = `${getRandomNum(0, maxWidth - 90)}px`; // Вычитаем половину
  elemId.style.top = `${getRandomNum(0, maxHeight - 25)}px`; // чтобы не выходило за пределы экрана
  console.log(elemId.style.left);
};

const runGame = () => {
  const randomStr = arrStr[getRandomNum(0, arrStr.length - 1)];
  document.getElementById('style').innerHTML = randomStr; // Установка содержимого для элемента
  getRandomColor();
  getRandomPosition();
};

setInterval(runGame, 1500); // выполняет код раз в 1,5 секунды
