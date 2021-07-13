console.log('script detail.js');

let newsData = JSON.parse(localStorage.getItem('newsData'));
let search = window.location.search; // '?id=4'
search = search.substring(1);
let searchParams = new URLSearchParams(search);

let currentNews = newsData[searchParams.get('id')];

document.getElementById('tag').innerText = currentNews.category;
document.getElementById('title').innerText = currentNews.title;
document.getElementById('date').innerText = currentNews.published_at;
document.getElementById('description').innerText = currentNews.description;
document
  .getElementById('image')
  .setAttribute(
    'src',
    currentNews.image ? currentNews.image : 'assets/images/news.jpg'
  );
