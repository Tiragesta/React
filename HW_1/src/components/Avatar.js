import React from 'react';

const Avatar = ({image='', width = 100, height = 80}) => (
    <img className="Avatar" src={image} alt="user Avatar" width={width} height={height} />
);
    

export default Avatar;
