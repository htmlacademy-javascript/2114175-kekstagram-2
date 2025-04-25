import {isEscapeKey} from './util.js';

const templateFragment = document.querySelector('#comment').content;

export const modalBigPic = (dataPictures) => {
  const pictures = document.querySelectorAll('.picture'); // все
  const bigPic = document.querySelector('.big-picture'); // модалка для большого фото
  const cancelBut = bigPic.querySelector('.cancel'); // крестик в модалке
  const commentCount = bigPic.querySelector('.social__comment-count'); //счетчик комментариев
  const commentsLoader = bigPic.querySelector('.comments-loader'); // кнопка загрузить еще
  const body = document.querySelector('body');

  const bodyScroll = () => {
    body.classList.toggle('modal-open');
  };

  const hiddenClass = () => {
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
    bodyScroll();

    document.removeEventListener('keydown', onDocumentKeydown);
  }

  cancelBut.addEventListener('click', () => {
    closeUserModal();
  });

  const renderCooments = (comments) => {
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

  pictures.forEach((picture) => {
    picture.addEventListener('click', (evt) => {
      openUserModal();
      hiddenClass();
      bodyScroll();
      const picId = +evt.currentTarget.getAttribute('data-id');
      const dataPicture = dataPictures.filter((dataPic) => dataPic.id === picId)[0];
      bigPic.querySelector('.big-picture__img img').src = dataPicture.url;
      bigPic.querySelector('.likes-count').textContent = dataPicture.likes;
      bigPic.querySelector('.social__comment-total-count').textContent = dataPicture.comments.length;
      bigPic.querySelector('.social__comments').innerHTML = '';
      bigPic.querySelector('.social__comments').append(renderCooments(dataPicture.comments));
      bigPic.querySelector('.social__caption').textContent = dataPicture.description;
    });
  });
};
