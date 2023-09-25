import SearchMenu from '../pages/SearchMenu'
import {connect} from 'react-redux'

const mapStateToProps=state=>({
    cardData:state.cardItems.cardData,
    favoriteData:state.cardItems.favoriteData
})


export default connect(mapStateToProps)(SearchMenu)