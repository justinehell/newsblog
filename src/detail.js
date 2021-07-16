import './assets/style/global.css';
import './assets/style/style.css';
import Logo from './assets/images/logo.svg';
import NewsImage from './assets/images/news.jpg';

let newsData = JSON.parse(sessionStorage.getItem('newsData'));
let search = window.location.search; // '?id=4'
search = search.substring(1);
let searchParams = new URLSearchParams(search);

let currentNews = newsData[searchParams.get('id')];

document.title = currentNews.title;

document.getElementById('logo').src = Logo;

document.querySelector('.article__tag').innerText =
  currentNews.category.charAt(0).toUpperCase() + currentNews.category.slice(1);
document.querySelector('.article__title').innerText = currentNews.title;
document.querySelector('.article__date').innerText = dayjs(
  currentNews.published_at
).format('DD/MM/YYYY');
document.querySelector('.article__description').innerText =
  currentNews.description;
document
  .querySelector('.article__image')
  .setAttribute('src', currentNews.image ? currentNews.image : NewsImage);
