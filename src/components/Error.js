import {
    errorEl,
    errorTextEl,
    DEFAULT_DESPLY_TIME,
} from '../common.js'

const renderError = (message = 'Something went Wrong') => {
    errorTextEl.textContent = message;
    errorEl.classList.add('error--visible');
    setTimeout(() => {
        errorEl.classList.remove('error--visible');
    }, DEFAULT_DESPLY_TIME)
    
}

export default renderError;