import { getCardNewsDetail } from './utils/domModel';
import { getStoredData } from './utils/sessionStorage';

let newsData = getStoredData('newsData');
let search = window.location.search; // '?id=4'
search = search.substring(1);
let searchParams = new URLSearchParams(search);

let currentNews = newsData[searchParams.get('id')];

document.title = currentNews.title;

getCardNewsDetail(currentNews);
