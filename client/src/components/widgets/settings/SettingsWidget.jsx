import React, { Component } from 'react';
import './SettingsWidget.css'

class SettingsWidget extends Component {
    state = {}
    render() { 
        return (
            <div id="settings-widget">
                <div id="settings-heading">Settings</div>
                <div id="settings-main"></div>
            </div>
        );
    }
}
 
export default SettingsWidget;