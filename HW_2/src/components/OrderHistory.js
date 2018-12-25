import React from 'react';
import OrderHistoryCard from './OrderHistoryCard';

const OrderHistory = ({ items, onDelete, onShowMoreInfo }) => (
    <ul>
        <thead>
                <tr>
                    <th>Date</th>
                    <th>Price</th>
                    <th>Delivery address</th>
                    <th>Rating</th>
                </tr>
            </thead>
        {items.map(item => (
            <li key={item.id}>
                <OrderHistoryCard 
                  date={item.date} 
                  price={item.price} 
                  address={item.address} 
                  rating={item.rating}
                  onShowMoreInfo={() => onShowMoreInfo(item.id)}
                  onDelete={() => onDelete(item.id)} />
            </li>
        ))}
    </ul>
);

export default OrderHistory;