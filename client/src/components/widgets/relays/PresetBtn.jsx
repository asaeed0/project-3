import React from 'react';
import './PresetBtn.css'


const PresetBtn = (props) => { 
    const { preset } = props;
    return (
        <React.Fragment>
            <button id={preset.id} onClick={() => props.onToggle(props.preset.id)}>{preset.name}</button>
        </React.Fragment>
    )
}

export default PresetBtn;