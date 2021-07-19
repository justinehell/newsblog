import { getCardNews } from './utils/domModel';
import { fetchNews } from './services/newsApi';
import { getStoredData, setStoredData } from './utils/sessionStorage';
import { LIMIT } from './utils/appSettings';

let isClicked = false;
let newsOffset = 0;

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
} else {
  console.log('Well hello production mode!');
}

let menuBurger = document.getElementById('toggle-menu-btn');
let menuBottomList = document.getElementById('menu-bottom-list');
let showNewsBtn = document.getElementById('show-news-btn');

const showMenuBottom = () => {
  menuBottomList.style.maxHeight = '300px';
};
const hideMenuBottom = () => {
  menuBottomList.style.maxHeight = '0px';
};

const storeData = (data) => {
  let previousNews = getStoredData('newsData') || [];
  let lastestNews = [...previousNews, ...data];
  setStoredData('newsData', lastestNews);
};

const displayData = (newsData) => {
  const cardTemplate = document.getElementById('card-template');

  newsData.forEach((news, i) => {
    const id = i + newsOffset;
    getCardNews(cardTemplate, id, news);
  });
};

const showNews = async () => {
  let data = await fetchNews(newsOffset);
  storeData(data);
  displayData(data);
  newsOffset += LIMIT;
};

const initialNews = () => {
  let initialData = getStoredData('newsData') || [];
  displayData(initialData);
  newsOffset = initialData.length;
};

menuBurger.addEventListener('click', () => {
  isClicked = !isClicked;
  isClicked ? showMenuBottom() : hideMenuBottom();
});

showNewsBtn.addEventListener('click', () => {
  showNews();
});

window.addEventListener('resize', function (event) {
  let newWidth = window.innerWidth;
  newWidth >= 960 ? showMenuBottom() : hideMenuBottom();
});

initialNews();
getStoredData('newsData') ? null : showNews();
