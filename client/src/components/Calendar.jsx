import React, { Component } from 'react';
import './Calendar.css';

class Calendar extends Component {
    state = {  }

    handleClick() {
        window.location.assign("http://localhost:3000/calendar/")
    }

    render() { 
        return (
            <div id="calendar-summary" onClick={() => this.handleClick()}>
                <div id="calander-heading">Calander</div>
            </div>
        );
    }
}
 
export default Calendar;