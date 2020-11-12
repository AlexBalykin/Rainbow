const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getSign = () => {
  const signs = '+-×';
  const signsCount = signs.length - 1;
  const randomIndex = getRandomNum(0, signsCount);
  return signs[randomIndex];
};

const calculation = () => {
  const number1 = getRandomNum(1, 10);
  const number2 = getRandomNum(1, 10);
  const sign = getSign();
  const question = `${number1} ${sign} ${number2}`;
  return question;
};

const arrStr = [
  'КРАСНЫЙ',
  'ЗЕЛЁНЫЙ',
  'СИНИЙ',
  'ЖЁЛТЫЙ',
  'ОРАНЖЕВЫЙ',
  'ФИОЛЕТОВЫЙ',
  'ГОЛУБОЙ',
  // 'ХЛОПОК',
  'calculation',
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

const getRandomColor = () => {
  const сolor = getRandomNum(0, arrColor.length - 1);
  const colorFon = getRandomNum(0, arrColor.length - 1);
  if (сolor === colorFon) {
    return colorFon;
  }
  // document.getElementById('style').style.color = arrColor[сolor]; (Меняет цвет текста)
  document.getElementById('style').style.backgroundColor = arrColor[colorFon]; // Возвращает ссылку на элемент по его идентификатору // Устанавливаем цвет фона элемента
  return arrColor[colorFon];
};

const getRandomPosition = () => {
  const maxWidth = window.innerWidth - 180;
  const maxHeight = window.innerHeight - 50;
  const elemId = document.getElementById('style');
  elemId.style.left = `${getRandomNum(0, maxWidth - 90)}px`; // Вычитаем половину
  elemId.style.top = `${getRandomNum(0, maxHeight - 25)}px`; // чтобы не выходило за пределы экрана
};

const runGame = () => {
  let randomStr = arrStr[getRandomNum(0, arrStr.length - 1)];
  if (randomStr === 'calculation') {
    randomStr = calculation();
  }
  document.getElementById('style').innerHTML = randomStr; // Установка содержимого для элемента
  getRandomColor();
  getRandomPosition();
};

setInterval(runGame, 1500);
