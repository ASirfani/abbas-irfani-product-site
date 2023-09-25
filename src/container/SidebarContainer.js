import SidebarContainer from '../DashBoard/Sidebar';
import {connect} from 'react-redux'
const mapStateToProps = state => ({
    sideVasiblityData: state.cardItems.sideVasiblity
});


export default connect(mapStateToProps,null)(SidebarContainer)