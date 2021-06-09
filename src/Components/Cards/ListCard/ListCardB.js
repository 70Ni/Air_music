import React, { Component, createRef } from 'react';
import ArtistList from '../../../Container/ArtistMap';
import discover from '../../../Images/asia.jpg';
import Pause from '../../../Images/Icons/pause.svg';
import Favorite from '../../../Images/Icons/save.svg'
import { Music } from '../../../Json/Music'
import MusicPlayer from '../../MusicPlayer/MusicPlayer';
import './ListCard.css'

import '../../MusicPlayer/Slider.scss'
let prevMusic = 'NotSet'


let audio = new Audio();
let Newarray = []

var curmins;
var cursecs;
var durmins;
var dursecs;

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
var R = document.getElementById('range1')

class ListCardB extends Component {
    constructor(props) {
        super(props);
        this.inputEl = createRef();

        this.state = {
            MusicGroup: "",
            IndexOfMusic: "",
            ClickedMusic: "",
            prevMusic: "NotSet",
            value: 0,
            newsec: 1,

        }

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





    }
    onChange = () => {
        if (audio.duration) {
            let selectNumber = Number(this.inputEl.current.value)
            audio.currentTime = selectNumber
            audio.play();
        }

        console.log(this.state.currentTime)
        document.documentElement.style.setProperty('--base', this.inputEl.current.value);
        document.documentElement.style.setProperty('--max', this.state.AudioDuration);

    };
    prevSong = () => {
        if (this.state.IndexOfMusic > 0) {
            let PrevPlayIndex = this.state.IndexOfMusic - 1;
            let PrevPlayId = this.state.MusicGroup[PrevPlayIndex].id;
            this.IndexFinder(PrevPlayId)
        }
    }



    PlayPause = () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
    IndexFinder = (id) => {
        if (prevMusic !== id) {
            prevMusic = id
            let r = Newarray.map((toPlay, index) => toPlay.id === id).indexOf(true);
            return this.setState({
                MusicGroup: Newarray,
                ClickedMusic: id,
                IndexOfMusic: r,
                color: '#fff',
            }, () => {
                this.MusicGroupSet()

            })

        } this.PlayPause()
    }




    MusicGroupSet = () => {

        audio.src = this.state.MusicGroup[this.state.IndexOfMusic].URL.default;
        audio.play();



        audio.onended = (event) => {
            console.log(event)
        }


    }



    Mute = () => {
        if (audio.muted) {
            audio.muted = false;
        } else {
            audio.muted = true;
        }
    }


    componentDidMount() {
        Newarray.push(this.props);
        // setInterval(() => {
        //     this.setState({
        //         curmins:curmins,
        //         cursecs:cursecs
        //     })
        // }, 1000);




        this.intervalID = setInterval(
            () => this.seektimeupdate(),
            1000
        );
    }



    seektimeupdate() {
        if (audio.duration) {

            let nt = audio.currentTime * (100 / audio.duration);
            var curmins = Math.floor(audio.currentTime / 60);
            var cursecs = Math.floor(audio.currentTime - curmins * 60);
            var durmins = Math.floor(audio.duration / 60);
            var dursecs = Math.floor(audio.duration - (durmins * 60));
            if (cursecs < 10) { cursecs = "0" + cursecs }
            if (curmins < 10) { curmins = "0" + curmins }
            if (durmins < 10) { durmins = "0" + durmins }
            if (dursecs < 10) { dursecs = "0" + dursecs }
      
            this.setState({
                AudioDuration: audio.duration,
                currentTime: audio.currentTime,
                cursecs: cursecs,
                curmin: curmins,
                durmins: durmins,
                dursecs: dursecs,

            });
            document.documentElement.style.setProperty('--base', this.state.currentTime);
            document.documentElement.style.setProperty('--max', audio.duration);
        }
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
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


        const { id, name, preview, artist_image, views, likes, duration, } = this.props
        return (
            <>
                {/* https://www.cssscript.com/demo/range-slider-webkit/

                https://www.hongkiat.com/blog/html5-range-slider-style/
                // onClick={() => console.log(this.props.id)}
                 */}

                <input id="range1" type="range" min="0" max={audio.duration} value={this.state.currentTime} step="1" ref={this.inputEl}
                    onChange={() => this.onChange()} />



                <div className="List_card_wrapper ListCard_B" key={id}>
                    <div className="List_card_content" >
                        <div className="List_Images">
                            <img src={preview} id="imag" alt="" className="List_Image" onClick={() => this.IndexFinder(this.props.id)} />
                            <img src={Pause} alt="" className="controller" />
                        </div>
                        <div className="List_Name_wrapper">
                            <div className="MusicName_B ListCard_B" >{name}</div>
                        </div>
                        <div className="List_duration_view_wrapper">
                            <div className="List_duration">{this.state.curmin}:{this.state.cursecs}</div>
                            <div className="List_view">{this.state.durmins}:{this.state.dursecs}</div>
                        </div>

                        {/* <div className="List_status">Now Listening...</div> */}

                        <img src={Favorite} alt="" className="List_save" onClick={()=>console.log(audio.duration)}/>
                    </div>
                </div>
            </>
        );
    }
}

export default ListCardB;