import {isEscapeKey} from './util.js';

const templateFragment = document.querySelector('#comment').content;

export const renderModalBigPhoto = (dataPictures) => {
  const pictures = document.querySelectorAll('.picture'); // все
  const bigPic = document.querySelector('.big-picture'); // модалка для большого фото
  const socialCommentsList = bigPic.querySelector('.social__comments'); // li
  const cancelBut = bigPic.querySelector('.cancel'); // крестик в модалке
  const commentCount = bigPic.querySelector('.social__comment-count'); //счетчик комментариев
  const commentCountShow = commentCount.querySelector('.social__comment-shown-count');
  const commentsLoader = bigPic.querySelector('.comments-loader'); // кнопка загрузить еще
  const body = document.querySelector('body');

  let socialComments = [];

  const toggleBodyScrollClass = () => {
    body.classList.toggle('modal-open');
  };

  const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeUserModal();
    }
  };

  function openUserModal () { // открытие модалки
    bigPic.classList.remove('hidden');

    document.addEventListener('keydown', onDocumentKeydown);
  }

  function closeUserModal () { // закрытие модалки
    bigPic.classList.add('hidden');
    toggleBodyScrollClass();

    document.removeEventListener('keydown', onDocumentKeydown);
  }

  cancelBut.addEventListener('click', () => { // закрытие на крестик
    closeUserModal();
  });

  const getTemplateComments = (comments) => { // генерация комметов по темплейту в html
    const fragment = document.createDocumentFragment();

    comments.forEach((comment) => {
      const cloneComment = templateFragment.cloneNode(true);
      const commentElement = cloneComment.querySelector('.social__comment');

      commentElement.querySelector('img').src = comment.avatar; // аватарка
      commentElement.querySelector('img').alt = comment.name; // имя к аватарке в alt у img
      commentElement.querySelector('.social__text').textContent = comment.message; // текст комментария

      fragment.append(commentElement);
    });

    return fragment;
  };

  const loadMoreComments = () => { // загружает еще комментариии
    const appendComments = socialComments.splice(0, 5);
    const loadShowComment = parseInt(commentCountShow.textContent, 10);
    commentCountShow.textContent = appendComments.length + loadShowComment;

    socialCommentsList.append(getTemplateComments(appendComments));
    console.log(loadShowComment);

    if (socialComments.length === 0) {
      commentsLoader.classList.add('hidden'); // отключаю отображение кнопки
    }
  };

  commentsLoader.addEventListener('click', loadMoreComments); // клик на загрузить еще

  const initComments = () => { // рендерит первые комменты

    if (socialComments.length <= 5) {
      commentCount.classList.add('hidden'); // отключаю отображение счетчика комментов
      commentsLoader.classList.add('hidden'); // отключаю отображение кнопки
      socialCommentsList.append(getTemplateComments(socialComments));// закидываю комменты фор ич внизу
    } else {
      commentCount.classList.remove('hidden');
      commentsLoader.classList.remove('hidden');
      const sliceMassive = socialComments.splice(0, 5);// записываем первые 5
      commentCountShow.textContent = 5; // задаю начало счетчика с 5
      socialCommentsList.append(getTemplateComments(sliceMassive)); // закидываю комменты в фор ич внизу
    }
  };

  pictures.forEach((picture) => {
    picture.addEventListener('click', (evt) => {
      openUserModal(); // открытие модалки
      toggleBodyScrollClass(); // скрол экрана при модалке
      const picId = +evt.currentTarget.getAttribute('data-id'); // находим таргет по id
      const dataPicture = dataPictures.filter((dataPic) => dataPic.id === picId)[0]; // фильтруем чтоб таргет картинка и большая по id сходились
      bigPic.querySelector('.big-picture__img img').src = dataPicture.url; // src большой картинке
      bigPic.querySelector('.likes-count').textContent = dataPicture.likes; // лайки
      bigPic.querySelector('.social__comment-total-count').textContent = dataPicture.comments.length; // счетчик комментов
      bigPic.querySelector('.social__caption').textContent = dataPicture.description; // подпись под картинкой
      bigPic.querySelector('.social__comments').innerHTML = ''; // удаляем демо комменты
      socialComments = dataPicture.comments.map((comment) => ({...comment})); // перезаписываем пустой массив с даннымим из большой фотки
      initComments(); // вызываю функцию с отрисовкой комментов
    });
  });
};
