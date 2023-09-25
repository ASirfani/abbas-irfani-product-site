import { ADD_TO_CART, ADD_TO_FAVORITES,SET_SIDE_VASIBLITY } from '../constants';

const initialState = {
    cardData: [],
    favoriteData: [],
    sideVasiblity: true
};

export default function cardItems(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cardData: [...state.cardData, action.data]
            };
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favoriteData: [...state.favoriteData, action.data]
            };
            case SET_SIDE_VASIBLITY:
                return {
                    ...state,
                    sideVasiblity: action.data
                };
        default:
            return state;
    }
}
