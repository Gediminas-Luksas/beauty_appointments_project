import React from 'react';
import moment from 'moment';
import './index.css';

import AppointmentLists from '../../components/AppointmentList';

export default class Calendar extends React.Component {
    state = {
        dateContext: moment(),
        today: moment(),
        selectedDay: null,
    }

    weekdaysShort = moment.weekdaysShort();
    months = moment.months();

    year = () => {
        return this.state.dateContext.format("Y");
    }
    month = () => {
        return this.state.dateContext.format("MMMM");
    }
    daysInMonth = () => {
        return this.state.dateContext.daysInMonth();
    }
    currentDate = () => {
        return this.state.dateContext.get("date");
    }
    currentDay = () => {
        return this.state.dateContext.format("D");
    }

    firstDayOfMonth = () => {
        let dateContext = this.state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format('d');
        return firstDay;
    }

    nextMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).add(1, "month");
        this.setState({
            dateContext: dateContext
        });
        this.props.onNextMonth && this.props.onNextMonth();
    }

    prevMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).subtract(1, "month");
        this.setState({
            dateContext: dateContext
        });
        this.props.onPrevMonth && this.props.onPrevMonth();
    }
    
    onDayClick = (e, day) => {
        this.setState({
            selectedDay: day
        });
        this.props.onDayClick && this.props.onDayClick(e, day);
    }

    renderDate(){
        if(this.state.selectedDay === null){
            return this.currentDate()
        } return this.state.selectedDay
    };
    
    render() {
        let weekdays = this.weekdaysShort.map((day) => {
            if(day === "Sun" || day === "Sat"){
                return <li className="weekend" key={day}>{day}</li>;
            }
            return (
                <li  key={day}>{day}</li>
                )
            });

        let blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(<li key={i * 80} className="emptySlot">
                {""}
                </li>
            );
        }

        let daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
            const dayToString = d.toString();
            let className = (dayToString === this.currentDay() ? "days": "days");
            let selectedClass = (  d === this.state.selectedDay ? " active " : "")
            daysInMonth.push(
                <li key={d} className={className + selectedClass} >
                    <span onClick={(e)=>{this.onDayClick(e, d)}}>{d}</span>
                </li>
            );
        }

        var totalSlots = [...blanks, ...daysInMonth];
        let rows = [];
        let cells = [];

        totalSlots.forEach((row, i) => {
            if ((i % 7) !== 0) {
                cells.push(row);
            } else {
                let insertRow = cells.slice();
                rows.push(insertRow);
                cells = [];
                cells.push(row);
            }
            if (i === totalSlots.length - 1) {
                let insertRow = cells.slice();
                rows.push(insertRow);
            }
        });

        let trElems = rows.map((d, i) => {
            return (
                <ul key={i*100}>
                    {d}
                </ul>
            );
        })
        return (
            <section className="calendar">
                <div className="calendar_month">
                    <div className="month">      
                        <ul>
                            <li onClick={(e)=> {this.prevMonth()}} className="prev">&#10094;</li>
                            <li onClick={(e)=> {this.nextMonth()}} className="next">&#10095;</li>
                            <li className="months">
                            {this.month()}
                            <br />
                            <span>{this.year()}</span>
                            </li>
                        </ul>
                    </div>
                        <ul className="weekdays">
                            {weekdays}
                        </ul>
                    <ul className="days">  
                                {trElems}
                            </ul>
                </div>
                <AppointmentLists year={this.year()} month={this.month()} allDay={this.renderDate()} />
        </section>
        );
    }
}