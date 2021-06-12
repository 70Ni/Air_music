

import React, { Component } from 'react'
import { seektimeupdate } from '../../Container/FUNCTIONS'
import { connect } from 'react-redux';
import './MusicPlayer.css'


let intervalID = undefined;

console.log(intervalID)

class DurationTime extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        intervalID = setInterval(() => {
            seektimeupdate()
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(intervalID)
    }

    render() {
        return (
            <div className="MusicDuration_wrapper">{this.props.currentTimer.curmins}:{this.props.currentTimer.cursecs}/{this.props.currentTimer.durmins}:{this.props.currentTimer.dursecs} </div>
        );
    }
}

const mapStateToProps = state => ({
    currentTimer: state.timer
})

export default connect(mapStateToProps, null)(DurationTime);
