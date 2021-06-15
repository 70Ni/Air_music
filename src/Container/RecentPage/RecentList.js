import React, { useEffect, Component } from 'react';
import { shuffle, numFormatter } from '../../Container/FUNCTIONS'
import ListcardB from '../../Components/Cards/ListCard/ListCardB'

import { Music } from '../../Json/Music';
import { connect } from 'react-redux';
import { flushSync } from 'react-dom';







class RecentList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        console.log(this.props.currentState.MusicHistory)
        return (

            <div className="TrenPag_LisCarWrapper" style={{color:'white'}}>
                {/* {
                    this.props.currentState.MusicHistory.map((song, i) => {
                        return (
                            <ListcardB
                                key={i}
                                id={song.id}
                                preview={song.Preview.default}
                                name={song.name}
                                artist={song.Artist}
                                artist_image={song.Artist_image}
                                views={numFormatter(song.Views)}
                                likes={numFormatter(song.Likes)}
                                duration={song.duration}
                                URL={song.URL}
                            />
                        )
                    })
                } */}
                Hello
            </div>
        )

    }
}
const mapStateToProps = state => ({
    currentState: state.player,
})

export default connect(mapStateToProps, null)(RecentList);
