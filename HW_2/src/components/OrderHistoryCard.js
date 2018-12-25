import React from 'react';

const OrderHistoryCard = ({ id, date, price, address, rating, onDelete, onShowMoreInfo}) => (
    <div>
        <table>
            
            <tbody>
            
                <tr key={id}>
                    <td>{date}</td>
                    <td>{price}</td>
                    <td>{address}</td>
                    <td>{rating}</td>
                    <td><button type="button" onClick={onShowMoreInfo}>Show more</button></td>
                    <td><button type="button" onClick={onDelete}>Delete</button></td>
                </tr>
            </tbody>
    </table>
    </div>
    
)

export default OrderHistoryCard;


    
