import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Store from '../../../Redux/Store';
import { isFavorite } from '../../../Redux/favorite'
import { indexFind } from '../../../Redux/IndexFinder';
import Play from '../../../Images/Icons/Play_fill.svg';
import Favorite from '../../../Images/Icons/save.svg'
import info from '../../../Images/Icons/list.svg'

import DurationTime from '../../MusicPlayer/DurationTime'
import '../../MusicPlayer/Slider.scss'
import './ListCard.css'
import Playing from '../../../Images/Icons/play_fill.svg'
import DurationTicker from '../../../Components/MusicPlayer/Durationticker'
let Newarray = [{isLoop:false}]



function ListCardB({ id, name, preview, views, duration, artist, URL}) {
    const MusicLoaded = useSelector(state => state.MusicLoaded)
    const fav = useSelector(state => state.favorite.id)
    const dispatch = useDispatch()

    useEffect(() => {
        Newarray.push({ id, name, preview, views, duration, artist, URL })
    }, [])

    let contrast = MusicLoaded.ClickedMusic == id ? { color: '#F27E4C', fontWeight: '700', opacity: '1' } : null
    let nowPlaying = MusicLoaded.ClickedMusic == id ? { visibility: 'visible' } : { visibility: 'hidden' }
    let isfavorite = fav.includes(id);
    return (
        <div className="List_card_wrapper ListCard_B" key={id} >
            <div className="List_card_content" >
                <div className="List_Images">
                    <img src={preview} id="imag" alt=""
                        className="List_Image"
                        onClick={() => dispatch(indexFind({ id, Newarray }))} />
                </div>
                <div className="List_Name_wrapper">
                    <div className="MusicName_B ListCard_B" style={contrast}>{name}</div>
                </div>
                <div className="List_duration_view_wrapper">
                    <div className="List_duration" style={contrast}>{duration}</div>
                    <div className="List_view" style={contrast}> {views}</div>
                </div>

                {/* <div className="List_status" style ={nowPlaying}>Now Listening...</div> */}
                <img src={Playing} alt="" style={nowPlaying} />
                <img src={isfavorite ? info :Favorite } alt="" className="List_save" onClick={() => dispatch(isFavorite({id,name}))} />
            </div>
        </div>
    )

}
export default ListCardB;



// class ListCardB extends Component {
//     constructor(props) {
//         super(props);




//     componentDidMount() {
//         Newarray.push(this.props);

//     }





//     render() {


//         const { id, name, preview, views, duration, currentState } = this.props
//         let sty = currentState.prevMusic == id ? { color: '#F27E4C', fontWeight: '700', opacity: '1' } : null
//         let nowPlaying = currentState.prevMusic == id ? { visibility: 'visible' } : { visibility: 'hidden' }

//     }
// }

