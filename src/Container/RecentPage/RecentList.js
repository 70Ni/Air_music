import React, { useEffect, Component } from 'react';
import { shuffle, numFormatter } from '../../Container/FUNCTIONS'
import ListcardB from '../../Components/Cards/ListCard/ListCardB'

import { Music } from '../../Json/Music';
import { connect } from 'react-redux';



let HistoryArray = []


let History = Music.filter(song => HistoryArray.includes(song.id))

class RecentList extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        HistoryArray.push(this.props.currentState.MusicHistory)
    }
    render() {
        console.log(History)

        return (

            <div className="TrenPag_LisCarWrapper" style={{ color: 'white' }}>
                {
                    History.map((song, i) => {
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
                }
            </div>
        )

    }
}
const mapStateToProps = state => ({
    currentState: state.player,
})

export default connect(mapStateToProps, null)(RecentList);
