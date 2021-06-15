import React, { useEffect, Component } from 'react';
import { shuffle, numFormatter } from '../../Container/FUNCTIONS'
import ListcardB from '../../Components/Cards/ListCard/ListCardB'

import { Music } from '../../Json/Music';
import { connect } from 'react-redux';



let HistoryArray = [5, 8, 15, 56]
let searchedMusics = undefined;
let c = Music.map(item=> (
     HistoryArray.map(song => song == item.id))

  );

  let a = Music.map(song=> song.id == HistoryArray.map(x => x))
let h = HistoryArray.map(x=>x)
let m = Music.map(song=> song.id)


class RecentList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount(){
        // HistoryArray.push(this.props.currentState.MusicHistory)
    }
    render() {
        console.log(h)
        console.log(m)
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
