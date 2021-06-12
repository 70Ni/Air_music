import React, { Component } from "react";
import { connect } from "react-redux";
import setCurrentMusics from '../Redux/Actions/musicPlayer.action'
import { Music } from '../Json/Music';

let RecentArray = []
class RecentList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    
    render() {
        if(this.props.currentState.ClickedMusic) {
            RecentArray.push(this.props.currentState.ClickedMusic)
            console.log("Hllo")
        }
        return (
            <div>
                {
                    RecentArray.map(recent => {
                        return (
                            <div clicked={recent}>
                            </div>
                        )
                    })
                }

            </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    setCurrentMusic: musicItem => dispatch(setCurrentMusics(musicItem))
})
const mapStateToProps = state => ({
    currentState: state.player,
})

export default connect(mapStateToProps, mapDispatchToProps)(RecentList);
