import dayjs from 'dayjs';
import NewsImage from 'url:../assets/images/news.jpg';

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

export const getCardNews = (template, id, news) => {
  let cardTemplateClone = document.importNode(template.content, true);
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
};

export const getCardNewsDetail = (currentNews) => {
  document.querySelector('.article__tag').innerText =
    currentNews.category.charAt(0).toUpperCase() +
    currentNews.category.slice(1);
  document.querySelector('.article__title').innerText = currentNews.title;
  document.querySelector('.article__date').innerText = dayjs(
    currentNews.published_at
  ).format('DD/MM/YYYY');
  document.querySelector('.article__description').innerText =
    currentNews.description;
  document
    .querySelector('.article__image')
    .setAttribute('src', currentNews.image ? currentNews.image : NewsImage);
};
