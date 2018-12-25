import React, { Component } from 'react';
import OrderHistory from './OrderHistory';
import * as OrderAPI from '../servises/order-api';
import Modal from './Modal';

export default class OrderHistoryPage extends Component {
    state = {
        order: [],
        isModalOpen: false
    };

    openModal = () => this.setState({ isModalOpen: true });

    closeModal = () => this.setState({ isModalOpen: false });

    componentDidMount() {
        OrderAPI.getAllOrderHistory().then(order => {
           this.setState({ order });
        });

    };

    handleDeleteOrderItem = id => {
        OrderAPI.deleteOrderHistoryItem(id).then(isOk => {
            if (!isOk) return;

            this.setState(state => ({
                order: state.order.filter(item => item.id !== id),
            }))
        });
    }
    
    handleShowMoreInfo = id => {
        OrderAPI.getOrderHistoryById(id).then(item => {
            console.log(item);
        })
    }

    handleAddOrderHistoryItem = () => {
        const item ={
            name: `New name ${Date.now()}`,
            price: Math.random(),

        };

        OrderAPI.addOrderHistoryItem(item).then(newItem => {
            this.setState(state => ({
                order: [...state.order, newItem]
            }))
        });
    }

    render() {
        const { order } = this.state;

        return <div>
                  <button type="button" onClick={this.handleAddOrderHistoryItem}>Add order history</button>
                  <OrderHistory 
                    items={order} 
                    onDelete={this.handleDeleteOrderItem} 
                    onShowMoreInfo={this.handleShowMoreInfo}
                    />
                    <div>
                    <button onClick={this.openModal}>Open</button>
                    {this.state.isModalOpen && 
                    (<Modal onClose={this.closeModal}>
                        <h1>Modal Content</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam suscipit iste rerum esse 
                           blanditiis facilis reiciendis facere delectus, soluta repudiandae, nihil sint minus.
                        </p>
                        <button onClick={this.closeModal}>Close Modal</button>
                    </Modal>)}
                </div>
                </div>;
    }
}