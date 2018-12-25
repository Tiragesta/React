import React from 'react';

export default function OrderTable({order}){
    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Price</th>
                    <th>Delivery address</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {
                    order.map(row => (
                        <tr key={row.id}>
                            <td>{row.date}</td>
                            <td>{row.price}</td>
                            <td>{row.address}</td>
                            <td>{row.rating}</td>

                        </tr>
                    ))
                }

            </tbody>
        </table>
    )
}