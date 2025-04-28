import {isEscapeKey} from './util.js';

const templateFragment = document.querySelector('#comment').content;

export const renderModalBigPhoto = (dataPictures) => {
  const pictures = document.querySelectorAll('.picture'); // все
  const bigPic = document.querySelector('.big-picture'); // модалка для большого фото
  const cancelBut = bigPic.querySelector('.cancel'); // крестик в модалке
  const commentCount = bigPic.querySelector('.social__comment-count'); //счетчик комментариев
  const commentsLoader = bigPic.querySelector('.comments-loader'); // кнопка загрузить еще
  const body = document.querySelector('body');

  const toggleBodyScrollClass = () => {
    body.classList.toggle('modal-open');
  };

  const toggleiddenClass = () => {
    commentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
  };

  const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeUserModal();
    }
  };

  function openUserModal () {
    bigPic.classList.remove('hidden');

    document.addEventListener('keydown', onDocumentKeydown);
  }

  function closeUserModal () {
    bigPic.classList.add('hidden');
    toggleBodyScrollClass();

    document.removeEventListener('keydown', onDocumentKeydown);
  }

  cancelBut.addEventListener('click', () => {
    closeUserModal();
  });

  const renderComments = (comments) => {
    const fragment = document.createDocumentFragment();

    comments.forEach((comment) => {
      const cloneComment = templateFragment.cloneNode(true);
      const commentElement = cloneComment.querySelector('.social__comment');

      commentElement.querySelector('img').src = comment.avatar;
      commentElement.querySelector('.social__text').textContent = comment.message;

      fragment.append(commentElement);
    });

    return fragment;
  };

  // В модуле, который отвечает за отрисовку окна с полноразмерным изображением,
  // доработайте код по выводу списка комментариев(пункт 4.6) таким образом,

  // 4.6. Все комментарии к изображению выводятся в блок .social__comments.
  // Сразу после открытия изображения в полноэкранном режиме отображается не более 5 комментариев.
  // Количество показанных комментариев и общее число комментариев отображается в блоке .social__comment-count.
  // Пример разметки списка комментариев приведён в блоке .social__comments.
  // Комментарий оформляется отдельным элементом списка li с классом social__comment.
  // Аватарка автора комментария отображается в блоке .social__picture.
  // Имя автора комментария отображается в атрибуте alt его аватарки.
  // Текст комментария выводится в блоке .social__text.

  // чтобы список показывался не полностью, а по 5 элементов,
  // и следующие 5 элементов добавлялись бы по нажатию на кнопку «Загрузить ещё».(пункт 4.7)
  // Не забудьте реализовать обновление числа показанных комментариев в блоке .social__comment-count.

  // 4.7. Отображение дополнительных комментариев происходит при нажатии на кнопку .comments-loader.
  // При нажатии на кнопку отображается не более 5 новых комментариев.
  // При изменении количества показанных комментариев число показанных комментариев
  // в блоке .social__comment-count также изменяется.

  pictures.forEach((picture) => {
    picture.addEventListener('click', (evt) => {
      openUserModal();
      toggleiddenClass();
      toggleBodyScrollClass();
      const picId = +evt.currentTarget.getAttribute('data-id');
      const dataPicture = dataPictures.filter((dataPic) => dataPic.id === picId)[0];
      bigPic.querySelector('.big-picture__img img').src = dataPicture.url;
      bigPic.querySelector('.likes-count').textContent = dataPicture.likes;
      bigPic.querySelector('.social__comment-total-count').textContent = dataPicture.comments.length;
      bigPic.querySelector('.social__comments').innerHTML = '';
      bigPic.querySelector('.social__comments').append(renderComments(dataPicture.comments));
      bigPic.querySelector('.social__caption').textContent = dataPicture.description;
    });
  });
};
