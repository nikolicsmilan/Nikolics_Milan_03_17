import React from 'react';
import './NmButton.css';

const NmButton = props => (
    <div className="KulsoToogleButton">
     <button className="ToggleButton" onClick={props.click}>
        <div className="ToggleButtonLine" />
        <div className="ToggleButtonLine" />
        <div className="ToggleButtonLine" />
    </button>
    </div>
   
);

export default NmButton;