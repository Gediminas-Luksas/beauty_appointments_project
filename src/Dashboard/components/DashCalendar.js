import React from 'react';
import moment from 'moment';

import DashPopup from './DashPopup';


export default class DashboardCalendar extends React.Component {
    state = {
        dateContext: moment(),
        today: moment(),
        selectedDay: null,
        popup: false
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


    renderData(){
        const allData = this.year() +" "+ this.month() +" "+ this.currentDay();
        const allDataSelected = this.year() +" "+ this.month() +" "+ this.state.selectedDay;

        if(this.state.selectedDay === null){
            return (
            <div>
                {allData}
            </div>
            );
        }
        return (
            <div>
                {allDataSelected}
            </div>
        );
    }


    render() {
        let weekdays = this.weekdaysShort.map(day => {
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
            let className = (dayToString === this.currentDay() ? "days": "");
            let selectedClass = (  d === this.state.selectedDay ? " active " : "")
            daysInMonth.push(
                <li onClick={(e)=>{this.onDayClick(e, d)}} key={d} className={className + selectedClass} >
                    <span>{d}</span>
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
            <section className="main-content">
                <div className="calendar_month">
                    <div className="month">      
                        <ul>
                            <li onClick={(e)=> {this.prevMonth()}} className="prev">&#10094;</li>
                            <li onClick={(e)=> {this.nextMonth()}} className="next">&#10095;</li>
                                Today 
                            <li className="months">
                            <span>{this.month()} {this.currentDate()}</span>
                            <br />
                            <span>{this.year()}</span>
                            </li>
                        </ul>
                    </div>
                        <ul className="dash-weekday">
                            {weekdays}
                        </ul>
                    <ul onClick={() => this.setState({popup: true})} className="days">  
                                <DashPopup keys={trElems} popup={this.state.popup} allDay={this.renderData()} />
                                {trElems}
                            </ul>
                </div>

        </section>
        );
    }
}

