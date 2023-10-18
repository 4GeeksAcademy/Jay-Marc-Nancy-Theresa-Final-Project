import React, { Component } from 'react';
import daysImage from "../../img/days-img.png";
import hoursImage from "../../img/hours-img.png";
import minutesImage from "../../img/minutes-img.png";
import secondsImage from "../../img/seconds-img.png";

import "../../styles/timer.css";


class CountdownTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            targetDate: new Date("2024-05-23 23:59:59").getTime(), // Change this to your event's date
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }

    componentDidMount() {
        this.interval = setInterval(this.updateTime, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateTime = () => {
        const now = new Date().getTime();
        const timeRemaining = this.state.targetDate - now;

        if (timeRemaining <= 0) {
            clearInterval(this.interval);
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        this.setState({ days, hours, minutes, seconds });
    };

    render() {
        const { days, hours, minutes, seconds } = this.state;
        return (
            <div>

                <div className="row my-3" id='timerComponent'>
                <h1 className="eventDate">May 23, 24, 25 & 26</h1>
                    {/* <h3 id="countdownTimerTitle">Countdown to the Convention</h3> */}
                    <div className="col-3 my-3" id='timerNumColumn'>

                        <div>
                            <span>{days}</span>
                        </div>
                        <div>
                            <span>{hours}</span>
                        </div>
                        <div>
                            <span>{minutes}</span>
                        </div>
                        <div>
                            <span>{seconds}</span>
                        </div>
                    </div>
                    <div className="col-9 my-3" id='timerImgColumn'>
                        <img className='timerImg' src={daysImage} />
                        <img className='timerImg' src={hoursImage} />
                        <img className='timerImg' src={minutesImage} />
                        <img className='timerImg' src={secondsImage} />
                    </div>
                </div>
            </div>
        );
    }
}

export default CountdownTimer;






