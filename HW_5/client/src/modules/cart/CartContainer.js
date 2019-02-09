import { connect } from 'react-redux';
import CartView from './CartView';
import * as selectors from '../../redux/menu/selectorsMenu';
import * as actions from '../../redux/actions';

const mapState = state => ({
   menu: selectors.getCartMenu(state),
});

const mapDispatch = { removeFromCart: actions.removeFromCart};

export default connect(
    mapState,
    mapDispatch,
)(CartView);  