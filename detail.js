let newsData = JSON.parse(sessionStorage.getItem('newsData'));
let search = window.location.search; // '?id=4'
search = search.substring(1);
let searchParams = new URLSearchParams(search);

let currentNews = newsData[searchParams.get('id')];

document.getElementById('tag').innerText =
  currentNews.category.charAt(0).toUpperCase() + currentNews.category.slice(1);
document.getElementById('title').innerText = currentNews.title;
document.getElementById('date').innerText = dayjs(
  currentNews.published_at
).format('DD/MM/YYYY');
document.getElementById('description').innerText = currentNews.description;
document
  .getElementById('image')
  .setAttribute(
    'src',
    currentNews.image ? currentNews.image : 'assets/images/news.jpg'
  );
