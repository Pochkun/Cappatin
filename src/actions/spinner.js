import * as types from '../constants';

export function showSpinner() {
    return {
        type: types.SHOW_SPINNER,
        payload: true
    }
}

export function hideSpinner() {
    return {
        type: types.HIDE_SPINNER,
        payload: false
    }
}
