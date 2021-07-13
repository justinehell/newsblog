let menuBurger = document.getElementById('toggle-menu-btn');
let menuBottomList = document.getElementById('menu-bottom-list');

let isClicked = false;
let isLoading = true;

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

let newsData = null;
const baseUrl = 'http://api.mediastack.com/v1/news?';
const API_KEY = 'bad01aea03e9ee9217f0c4c242eff258';

fetch(`${baseUrl}access_key=${API_KEY}&languages=fr,en`)
  .then(function (response) {
    // The API call was successful!
    if (response.ok) {
      // console.log(response);
      return response.json();
    } else {
      return Promise.reject(response);
    }
  })
  .then(function (data) {
    // This is the JSON from our response
    newsData = data.data;
    const html = newsData
      .map((news, i) => {
        return `
        <div id="card_${i}" class="card d-flex" onclick="handleClick(${i})" onmouseenter="handleMouseEnter(${i})" onmouseleave="handleMouseLeave(${i})">
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
    document.querySelector('section').insertAdjacentHTML('afterbegin', html);
    localStorage.setItem('newsData', JSON.stringify(newsData));
    isLoading = false;
  })
  .catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });

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
