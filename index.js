let menuBurger = document.getElementById('toggle-menu-btn');
let menuBottomList = document.getElementById('menu-bottom-list');

let isClicked = false;
let isLoading = false;
const showMenuBottom = () => {
  menuBottomList.style.maxHeight = '300px';
};
const hideMenuBottom = () => {
  menuBottomList.style.maxHeight = '0px';
};

menuBurger.addEventListener('click', () => {
  isClicked = !isClicked;
  isClicked ? showMenuBottom() : hideMenuBottom();
});

window.addEventListener('resize', function (event) {
  let newWidth = window.innerWidth;
  newWidth >= 960 ? showMenuBottom() : hideMenuBottom();
});

const BASE_URL = 'http://api.mediastack.com/v1/news?';
const API_KEY = 'bad01aea03e9ee9217f0c4c242eff258';
const LIMIT = 9;
let newsOffset = 0;

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
  let html = newsData
    .map((news, i) => {
      return `
    <div id="card_${i + newsOffset}" class="card d-flex" onclick="handleClick(${
        i + newsOffset
      })" onmouseenter="handleMouseEnter(${
        i + newsOffset
      })" onmouseleave="handleMouseLeave(${i + newsOffset})">
      <img
      class="card__image"
      src=${news.image ? news.image : 'assets/images/news.jpg'}
      alt="headphone"
      />
      <div class="card__content d-flex flex-grow">
      <span class="card__tag">${
        news.category.charAt(0).toUpperCase() + news.category.slice(1)
      }</span>
            <h2 id="title_${i}" class="card__title">${news.title}</h2>
            <div class="flex-grow"></div>
            <span class="card__date">${dayjs(news.published_at).format(
              'DD/MM/YYYY'
            )}</span>
          </div>
          </div>`;
    })
    .join('');
  return document
    .querySelector('section')
    .insertAdjacentHTML('beforeend', html);
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

initialNews();
sessionStorage.getItem('newsData') ? null : showNews();

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
