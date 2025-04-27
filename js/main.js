import {createBlockObjects} from './data.js';
import {renderPicMiniature} from './renderPicMiniature.js';
import {modalBigPic} from './modalBigPic.js';


const dataPictures = createBlockObjects(1, 25);
renderPicMiniature(dataPictures);
modalBigPic(dataPictures);
