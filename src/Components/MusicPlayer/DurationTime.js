

import React, { Component } from 'react'
import './MusicPlayer.css'
import { seektimeupdate } from '../../Container/FUNCTIONS'
import { connect } from 'react-redux';
import setCurrentMusics from '../../Redux/Actions/musicPlayer.action'


let intervalID = undefined;
console.log(intervalID)
class DurationTime extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        // if (this.props.currentState.ClickedMusic) {
        //     intervalID = setInterval(
        //         () => seektimeupdate(),
        //         1000
        //         );
        //         if(intervalID){
        //             console.log(intervalID)
        //         }
        //     }
        }
    componentWillUnmount() {
        clearInterval(intervalID)
    }
    render() {
        return (
            <div className="MusicDuration_wrapper">"</div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    setCurrentMusic: musicItem => dispatch(setCurrentMusics(musicItem))
})
const mapStateToProps = state => ({
    currentState: state.player
})

export default connect(mapStateToProps, mapDispatchToProps)(DurationTime);
