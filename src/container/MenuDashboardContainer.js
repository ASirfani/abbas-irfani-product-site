import MenuDashboardContianer from '../DashBoard/MenuDashboard';
import {connect} from 'react-redux'
import {setSideVasiblity} from '../state/Action'
const mapStateToProps = state => ({
    sideVasiblityData: state.cardItems.sideVasiblity
});
const mapDispatchToProps = dispatch=>({
    sideVasiblityHandler : data => dispatch(setSideVasiblity(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(MenuDashboardContianer)