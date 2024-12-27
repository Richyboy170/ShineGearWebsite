// components/Rectangle.tsx
import React from 'react';
import styles from './Rectangle.module.css';

type RectangleProps = {
    width: number;
    height: number;
    color: string;
};

const Rectangle = ({ width, height, color }: RectangleProps) => {
    const rectangleStyle = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color,
    };

    return (
        <div className={styles.rectangle} style={rectangleStyle}>
            This is a rectangle
        </div>
    );
};

export default Rectangle;
