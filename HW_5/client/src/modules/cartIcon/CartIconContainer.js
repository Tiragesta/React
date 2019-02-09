import React from 'react';
import { connect } from 'react-redux';
import CartIconView from './CartIconView';
import * as selectors from '../../redux/menu/selectorsMenu';
 
const mapState = state => ({
    amount: selectors.getCartMenuAmount(state),
});

/*class CartIconContainer extends Component {
     componentDidMount() {}

     componentDidUpdate() {}

     render() {
         return <CartIconView {...this.props} />;
     }
}*/

export default connect(mapState)(CartIconView);