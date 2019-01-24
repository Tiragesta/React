import React from 'react';
import styles from './Avatar.module.css'

const Avatar = ({image='', width = 100, height = 80}) => (
    <img className={styles.avatar} src={image} alt="user Avatar" width={width} height={height} />
);
    

export default Avatar;
