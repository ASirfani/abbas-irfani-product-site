import {ADD_TO_CART ,ADD_TO_FAVORITES,SET_SIDE_VASIBLITY} from '../constants'
export const addToCart =(data)=>{
    return {
        type:ADD_TO_CART,
        data:data
    }
}

export const addToFavorites =(data)=>{
    return {
        type:ADD_TO_FAVORITES,
        data:data
    }
}

export const setSideVasiblity =(data)=>{
    return {
        type:SET_SIDE_VASIBLITY,
        data:data
    }
}
