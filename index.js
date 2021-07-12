let menuBurger = document.getElementById('toggle-menu-btn');
let menuBottomList = document.getElementById('menu-bottom-list');

let isClicked = false;

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
    console.log(newsData);
    const html = data.data
      .map((news) => {
        return `
          <div class="card">
            <img
              class="card__image"
              src=${news.image ? news.image : 'assets/images/news.jpg'}
              alt="headphone"
            />
            <div class="card__content">
              <span class="card__tag">${news.category}</span>
              <h2 class="card__title">${news.title}</h2>
              <span class="card__date">${news.published_at}</span>
            </div>
          </div>`;
      })
      .join('');
    document.querySelector('section').insertAdjacentHTML('afterbegin', html);
  })
  .catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });
