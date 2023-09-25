import ProductSelectionPage from '../pages/payment/ProductSelectionPage'
import { connect } from 'react-redux'
import {addToCart} from '../state/Action'
const mapStateToProps=state=>({
    cardData:state.cardItems.cardData,
    favoriteData:state.cardItems.favoriteData
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
})
export default connect(mapStateToProps,mapDispatchToProps)(ProductSelectionPage)