import React from 'react';
import '../../styles.css';

const Element = ({value, onClick}) => (
    <div
        className="element"
        onClick={() => onClick(value)}
        value={value}
    >
        {value}
    </div>
)

export default Element;
