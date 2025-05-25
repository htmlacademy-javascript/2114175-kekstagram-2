import {createBlockObjects} from './data.js';
import {renderPicMiniature} from './renderPicMiniature.js';
import {renderModalBigPhoto} from './modalBigPic.js';
import './form.js';
import './filterForm.js';

const dataPictures = createBlockObjects(1, 25);
renderPicMiniature(dataPictures);
renderModalBigPhoto(dataPictures);
