import TemplateContainer from '../component/TemplateCard'
import {connect} from 'react-redux'
import {addToCart,addToFavorites } from '../state/Action'

const mapStateToProps=state=>({
    cardData:state.cardItems.cardData,
    favoriteData:state.cardItems.favoriteData
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    addToFavoritesHandler: data => dispatch(addToFavorites(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(TemplateContainer)