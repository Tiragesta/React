import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import routes from '../../configs/routes';

import MenuCard from './MenuCard';
import style from './MenuGrid.module.css'

const MenuGrid = ({ items, location , addToCart}) => (
    <ul className={style.MenuGrid}>
        {items.map(item => (
            <li className={style.MenuGridItem} key={item.id}>
              <Link className={style.MenuLink} to={{
                  pathname: `${routes.MENU}/${item.id}`,
                  state: { from: location }
                  }}
              >
                <MenuCard {...item} /><button onClick={() => addToCart(item.id)}>Add to Cart</button>
                
              </Link>
                
            </li>
        ))}
    </ul>
);

export default withRouter(MenuGrid);
