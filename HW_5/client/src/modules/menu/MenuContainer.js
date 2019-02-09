import { connect } from 'react-redux';
import MenuGrid from '../menu/MenuGrid';
import * as selectors from '../../redux/menu/selectorsMenu';
import * as actions from '../../redux/actions';

const mapState = state => ({
    menu: selectors.getMenu(state),
});

const mapDispatch = { addToCart: actions.addToCart};

export default connect(
    mapState, 
    mapDispatch
)(MenuGrid);