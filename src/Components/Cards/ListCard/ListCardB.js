import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NextMusic } from '../../../Container/FUNCTIONS';
import { IndexFinder, FavoriteFunc } from '../../../Container/FUNCTIONS'
import Play from '../../../Images/Icons/Play_fill.svg';
import Favorite from '../../../Images/Icons/save.svg'
import DurationTime from '../../MusicPlayer/DurationTime'
import '../../MusicPlayer/Slider.scss'
import './ListCard.css'
import setFavorite from '../../../Redux/Actions/likeAction.action';
import Playing from '../../../Images/Icons/play_fill.svg'

let Newarray = []
// let a = document.getElementById("imag")
// a.addEventListener('click',()=>{
//     a.innerHTML = "Hello World"
// })

// console.log(a)
// const TimeUpdater = () => {
//     setInterval(() => {
//         if (audio.duration) {
//             curmins = Math.floor(audio.currentTime / 60);
//             cursecs = Math.floor(audio.currentTime - curmins * 60);
//             durmins = Math.floor(audio.duration / 60);
//             dursecs = Math.floor(audio.duration - durmins * 60);
//             if (cursecs < 10) { cursecs = "0" + cursecs }
//             if (dursecs < 10) { dursecs = "0" + dursecs }
//             if (curmins < 10) { curmins = "0" + curmins }
//             if (dursecs < 10) { dursecs = "0" + dursecs }
//         }
//     }, 1000);


// }
let intervalID = undefined;


class ListCardB extends Component {
    constructor(props) {
        super(props);



        // const a = this.state.MusicGroup;
        // if (this.state.MusicGroup) {
        //     const mapped = a.map((playing, index) => this.state.ClickedMusic === playing.id).indexOf(true);
        //     this.setState({
        //         IndexOfMusic: mapped
        //     })
        // }
        // audio = new Audio(this.state.MusicGroup[this.state.IndexOfMusic].URL.default);
        // audio.play()
        // function nextSong(){
        //     this.state.IndexOfMusic ++;
        //     if(playlist_index > playlist.length-1){
        //         playlist_index = 0;

        //     }
        //     fetchMusicDetails();
        // }





        // }
        // onChange = () => {
        //     if (audio.duration) {
        //         let selectNumber = Number(this.inputEl.current.value)
        //         audio.currentTime = selectNumber
        //         audio.play();
        //     }

        //     console.log(this.state.currentTime)
        //     document.documentElement.style.setProperty('--base', this.inputEl.current.value);
        //     document.documentElement.style.setProperty('--max', this.state.AudioDuration);

        // };



















        // Mute = () => {
        //     if (audio.muted) {
        //         audio.muted = false;
        //     } else {
        //         audio.muted = true;
        //     }
        // }
    }
    componentDidMount() {
        Newarray.push(this.props);

    }




    // componentDidUpdate(prevProp, preState) {
    //     if (this.state.ClickedMusic !== preState.ClickedMusic) {
    //         let a = this.state.MusicGroup;
    //         let mapped = a.map((playing, index) => this.state.ClickedMusic === playing.id).indexOf(true);
    //         this.setState({
    //             IndexOfMusic: mapped
    //         })
    //     }
    //     if (this.state.IndexOfMusic) {
    //         const h = this.state.MusicGroup[this.state.IndexOfMusic].URL.default;
    //         console.log(h)
    //     }
    // }\




    // Button = () => {
    //     console.log(a)
    // }




    render() {

        // setInterval(() => {

        //     console.log(this.state)
        // }, 10000);


        // let range = max - min;
        // let ratio = this.inputEl.current - min / range;
        // let sx = ratio * 100;


        // console.log(this.inputEl.current)
        const { id, name, preview, views, duration, currentState } = this.props
        let sty = currentState.prevMusic == id ? { color: '#F27E4C', fontWeight: '700', opacity: '1' } : null
        let nowPlaying = currentState.prevMusic == id ? { visibility: 'visible' } : { visibility: 'hidden' }

        return (

            <>
                {/* https://www.cssscript.com/demo/range-slider-webkit/

                https://www.hongkiat.com/blog/html5-range-slider-style/
                // onClick={() => console.log(this.props.id)}
                 */}


                <div className="List_card_wrapper ListCard_B" key={id} >
                    <div className="List_card_content" >
                        <div className="List_Images">
                            <img src={preview} id="imag" alt="" className="List_Image" onClick={() => IndexFinder(id, Newarray)} />
                        </div>
                        <div className="List_Name_wrapper">
                            <div className="MusicName_B ListCard_B" style={sty}>{name}</div>

                        </div>
                        <div className="List_duration_view_wrapper">
                            <div className="List_duration" style={sty}>{currentState.prevMusic == id ? <DurationTime /> :duration}</div>
                            <div className="List_view" style={sty}>{views}</div>
                        </div>

                            <img src={Playing} alt="" style={nowPlaying} />
                        {/* <div className="List_status">Now Listening...</div> */}
                        <img src={Favorite} alt="" className="List_save" onClick={() => { FavoriteFunc(id) }} />
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    currentState: state.player,
    Favorite: state.favorite
})
const mapDispatchToProps = dispatch => ({
    setFavorite: Id => dispatch(setFavorite(Id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListCardB);