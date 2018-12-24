import React from 'react';
import '../../styles.css';

const Display = ({value}) => (
    <div className="display">
        <input maxLength="10" id="resultado" type="text" readOnly value={value} />
    </div>
);

export default Display;