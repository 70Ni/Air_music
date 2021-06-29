import React, { useEffect } from 'react';
import { NextMusic } from '../../../Container/FUNCTIONS';
import { useDispatch, useSelector } from 'react-redux'

import Store from '../../../Redux/Store';
import { indexFind,SkipPrev } from '../../../Redux/IndexFinder';
import Play from '../../../Images/Icons/Play_fill.svg';
import Favorite from '../../../Images/Icons/save.svg'
import DurationTime from '../../MusicPlayer/DurationTime'
import '../../MusicPlayer/Slider.scss'
import './ListCard.css'
import setFavorite from '../../../Redux/Actions/likeAction.action';
import Playing from '../../../Images/Icons/play_fill.svg'

let Newarray = []
let intervalID = undefined;


function ListCardB({ id, name, preview, views, duration, URL }) {
    const dispatch = useDispatch()

    useEffect(() => {
        Newarray.push({id, name, preview, views, duration, URL})
    }, [])
    console.log()
    return (
        <div className="List_card_wrapper ListCard_B" key={id} >
            <div className="List_card_content" >
                <div className="List_Images">
                    <img src={preview} id="imag" alt="" 
                    className="List_Image" 
                    onClick={() => dispatch(indexFind({id,Newarray}))} />
                </div>
                <div className="List_Name_wrapper">
                    <div className="MusicName_B ListCard_B">{name}</div>

                </div>
                <div className="List_duration_view_wrapper">
                    <div className="List_duration"><DurationTime /></div>
                    <div className="List_view" >{views}</div>
                </div>

                <img src={Playing} alt="" />
                {/* <div className="List_status">Now Listening...</div> */}
                <img src={Favorite} alt="" className="List_save" onClick={()=> dispatch(SkipPrev())}/>
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

const mapStateToProps = state => ({
    currentState: state.player,
    Favorite: state.favorite
})
const mapDispatchToProps = dispatch => ({
    setFavorite: Id => dispatch(setFavorite(Id))
})
