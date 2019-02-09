import React from 'react';

const Logo = ({image='', width = 100, height = 100}) => (
    <img src={image} alt="app logo" width={width} height={height}/>
);
    

export default Logo;
