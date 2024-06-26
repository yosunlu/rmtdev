import {
    spinnerSearchEl,
    spinnerJobDetailsEl
} from '../common.js';

const renderSpinner = (whichspinner) => {
    const spinnedEl = whichspinner === 'search' ? spinnerSearchEl : spinnerJobDetailsEl;
    spinnedEl.classList.toggle('spinner--visible');
}

export default renderSpinner;