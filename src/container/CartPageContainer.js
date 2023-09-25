import CartPageContainer from '../pages/payment/CartPage'
import { connect } from 'react-redux'

const mapStateToProps=state=>({
    cardData:state.cardItems.cardData,
})


export default connect(mapStateToProps)(CartPageContainer)