import * as types from '../constants/index';

const initState = false;

export default function (state = initState, action) {
    switch (action.type) {
        case types.SHOW_SPINNER:
            return true;

        case types.HIDE_SPINNER:
            return false;
    }

    return state;
}
