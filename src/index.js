import './assets/style/global.css';
import './assets/style/style.css';
import Logo from './assets/images/logo.svg';
import NewsImage from './assets/images/news.jpg';

const BASE_URL = 'http://api.mediastack.com/v1/news?';
const API_KEY = 'bad01aea03e9ee9217f0c4c242eff258';
const LIMIT = 9;

let isClicked = false;
let isLoading = false;
let newsOffset = 0;

document.getElementById('logo').src = Logo;

cnosole.log('hello');

let menuBurger = document.getElementById('toggle-menu-btn');
let menuBottomList = document.getElementById('menu-bottom-list');
let showNewsBtn = document.getElementById('show-news-btn');

const showMenuBottom = () => {
  menuBottomList.style.maxHeight = '300px';
};
const hideMenuBottom = () => {
  menuBottomList.style.maxHeight = '0px';
};

const handleClick = (id) => {
  let query = '?id=' + id;
  window.location.href = 'detail.html' + query;
};

const handleMouseEnter = (id) => {
  document.getElementById(`title_${id}`).classList.add('card__title--hover');
  document.getElementById(`card_${id}`).classList.add('card--up');
};

const handleMouseLeave = (id) => {
  document.getElementById(`title_${id}`).classList.remove('card__title--hover');
  document.getElementById(`card_${id}`).classList.remove('card--up');
};

function fetchData(offset) {
  isLoading = true;
  let url = `${BASE_URL}access_key=${API_KEY}&languages=fr,en&limit=${LIMIT}&offset=${offset}`;

  return fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res);
      }
    })
    .then((data) => {
      return data.data;
    })
    .catch(function (err) {
      // There was an error
      console.warn('Something went wrong.', err);
    })
    .finally(() => {
      isLoading = false;
    });
}

const storeData = (data) => {
  let previousNews = JSON.parse(sessionStorage.getItem('newsData')) || [];
  let lastestNews = [...previousNews, ...data];
  sessionStorage.setItem('newsData', JSON.stringify(lastestNews));
};

const displayData = (newsData) => {
  const cardTemplate = document.getElementById('card-template');

  newsData.forEach((news, i) => {
    const id = i + newsOffset;

    let cardTemplateClone = document.importNode(cardTemplate.content, true);
    let card = cardTemplateClone.querySelector('.card');
    let cardImg = cardTemplateClone.querySelector('.card__image');
    let cardTag = cardTemplateClone.querySelector('.card__tag');
    let cardTitle = cardTemplateClone.querySelector('.card__title');
    let cardDate = cardTemplateClone.querySelector('.card__date');

    card.id = `card_${id}`;
    cardTitle.id = `title_${id}`;
    cardTitle.innerText = news.title;
    cardTag.innerText =
      news.category.charAt(0).toUpperCase() + news.category.slice(1);
    cardDate.innerText = dayjs(news.published_at).format('DD/MM/YYYY');
    cardImg.src = news.image ? news.image : NewsImage;

    card.addEventListener('click', () => {
      handleClick(id);
    });
    card.addEventListener('mouseenter', () => {
      handleMouseEnter(id);
    });
    card.addEventListener('mouseleave', () => {
      handleMouseLeave(id);
    });
    return document.querySelector('section').appendChild(cardTemplateClone);
  });
};

const showNews = async () => {
  let data = await fetchData(newsOffset);
  storeData(data);
  displayData(data);
  newsOffset += LIMIT;
};

const initialNews = () => {
  let initialData = JSON.parse(sessionStorage.getItem('newsData')) || [];
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
sessionStorage.getItem('newsData') ? null : showNews();
