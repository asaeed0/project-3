import React, { Component } from 'react';
import "./CalendarWidget.css";
import CalendarRender from 'react-calendar';
import $ from 'jquery'

class CalendarWidget extends Component {
    state = {  }
    onChange = data => {
        const dateRaw = data.toString();
        const dateClean = this.cleanDate(dateRaw);
        this.setState({selectedDate : dateClean})
    };
    cleanDate = dateRaw => {
        let dayNameRaw = dateRaw.substring(0,3).toLowerCase();
        let monthRaw = dateRaw.substring(4,7).toLowerCase();
        let day = dateRaw.substring(8,10);
        let year =  dateRaw.substring(11,15);
        let dayName, month;
        switch (monthRaw) {
            case 'jan':
                month = 'January';
                break;
            case 'feb':
                month = 'February';
                break;
            case 'wed':
                month = 'March';
                break;
            case 'apr':
                month = 'April';
                break;
            case 'may':
                month = 'May';
                break;
            case 'jun':
                month = 'June';
                break;
            case 'jul':
                month = 'July';
                break;
            case 'aug':
                month = 'August';
                break;
            case 'sep':
                month = 'September';
                break;
            case 'oct':
                month = 'October';
                break;
            case 'nov':
                month = 'November';
                break;
            case 'dec':
                month = 'December';
                break;
            default:
                break;
        }
        switch (dayNameRaw) {
            case 'mon':
                dayName = 'Monday';
                break;
            case 'tue':
                dayName = 'Tuesday';
                break;
            case 'wed':
                dayName = 'Wednesday';
                break;
            case 'thu':
                dayName = 'Thursday';
                break;
            case 'fri':
                dayName = 'Friday';
                break;
            case 'sat':
                dayName = 'Saturday';
                break;
            case 'sun':
                dayName = 'Sunday';
                break;
            default:
                break;
        }
        return (`${dayName}, ${day} ${month} ${year}`);
    }
    render() { 
        return (
            <div id="calendar-widget">
                <h2>Calendar</h2>
                <CalendarRender onChange={this.onChange} />
                <hr />
                <h3>{this.state.selectedDate ? this.state.selectedDate : null}</h3>
            </div>
        );
    }
    componentDidMount() {
        let today = new Date();
        let date = today.getDate();
        $("button").find(`time:contains(${date})`).parent().trigger('click');
    }
}
 
export default CalendarWidget;