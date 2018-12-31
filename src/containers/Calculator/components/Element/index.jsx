import React from 'react';
import '../../styles.css';

const Element = ({value, onClick}) => (
    <div
        className="element-calculator"
        onClick={() => onClick(value)}
        value={value}
    >
        {value}
    </div>
)

export default Element;
