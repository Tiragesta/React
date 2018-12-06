import React from 'react';

const Navigation = ({item = []}) => (
    <ul>
        {item.map(item =>( 
        <li key={item}>
            <a href="/">{item}</a>
        </li>
        ))}
    </ul>
);

export default Navigation;