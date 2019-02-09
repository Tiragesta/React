import React from 'react';
import style from './Cart.module.css';

const CartView = ({ menu = [], removeFromCart }) => 
    menu.length > 0 ? (
        <table className={style.table}>
            <tbody>
                {menu.map(({id, name, amount, price}) => (
                    <tr key={id}>
                        <td>{name}</td>
                        <td><button>+</button>{amount}<button>-</button></td>
                        <td>{price}</td>
                        <td>
                            <button onClick={() => removeFromCart(id)}>Удалить</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    ) : (
        <h1>В корзине нет товаров!</h1>
    );

export default CartView;
