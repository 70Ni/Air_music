// import Musi from '../Music files/Marshmellow/Alone.mp3'

import { connect } from 'react-redux';
import store from '../Redux/store';
import setCurrentMusics from '../Redux/Actions/musicPlayer.action'



const shuffle=(arra1) =>{
    var ctr = arra1.length, temp, index;

    // While there are elements in the array
    while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}


function numFormatter(num) {
    if (num > 999 && num < 1000000) {
        return (num / 1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
    } else if (num > 1000000 && num < 1000000000) {
        return (num / 1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    } else if (num > 1000000000 && num < 1000000000000) {
        return (num / 1000000000).toFixed(1) + 'B';
    } else if (num < 900) {
        return num; // if value < 1000, nothing to do
    }
}

let audio = new Audio();

let prevMusic = store.getState().player.prevMusic
console.log(prevMusic)

function IndexFinder(id) {
    let c = "hello"+id
    console.log(c)
    // if (prevMusic !== id) {
    //     prevMusic = id
    //     let r = localArray.map((toPlay) => toPlay.id === id).indexOf(true);
    //     return store.dispatch({

    //         type: 'SET_MUSIC_PLAYER',
    //         payload: {
    //             ClickedMusic: id,
    //             IndexOfMusic: r,
    //             MusicGroup: localArray,
    //             prevMusic: id
    //         }

        // })


    // } this.PlayPause()
}


let PlayPause = () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}


const mapDispatchToProps = dispatch => ({
    setCurrentMusic: musicItem => dispatch(setCurrentMusics(musicItem))
})
const mapStateToProps = state => ({
    currentState: state.player
})

export { shuffle, numFormatter, PlayPause, IndexFinder }






// prevSong = () => {
//     this.setState(prevMus=>({
//         IndexOfMusic:prevMus.IndexOfMusic-1
//     }))

//     this.MusicGroupSet();
// }
// PlayPause = () => {
//     if (audio.paused) {
//         audio.play();
//     } else {
//         audio.pause();
//     }
// }

// MusicGroupSet = (id) => {
//     if (prevMusic !== this.state.IndexOfMusic) {
//         let r = Newarray.map((toPlay, index) => toPlay.id === id).indexOf(true)
//         prevMusic = r
//         this.setState({
//             MusicGroup: Newarray,
//             ClickedMusic: id,
//             IndexOfMusic: r,
//         }, () => {
//             audio.src = this.state.MusicGroup[this.state.IndexOfMusic].URL.default
//             audio.play();
//             audio.onended = (event) => {
//                 console.log(event)0
//             }
//         })
//     } else {
//         this.PlayPause()
//     }
// }





///////////////////////

// prevSong = () => {
//     if (this.state.IndexOfMusic > 0) {
//         let PrevPlayIndex = this.state.IndexOfMusic - 1;
//         let PrevPlayId = this.state.MusicGroup[PrevPlayIndex].id;
//         this.IndexFinder(PrevPlayId)
//     }
// }



// PlayPause = () => {
//     if (audio.paused) {
//         audio.play();
//     } else {
//         audio.pause();
//     }
// }
// IndexFinder = (id) => {
//     if (prevMusic !== id) {
//         prevMusic = id
//         let r = Newarray.map((toPlay, index) => toPlay.id === id).indexOf(true);
//         return this.setState({
//             MusicGroup: Newarray,
//             ClickedMusic: id,
//             IndexOfMusic: r,
//             curmins: ''
//         }, () => {
//             this.MusicGroupSet()

//         })

//     } this.PlayPause()
// }




// MusicGroupSet = () => {

//     audio.src = this.state.MusicGroup[this.state.IndexOfMusic].URL.default;
//     audio.play();
//     if(audio.duration){
//         var durmins = Math.floor(audio.duration / 60);
//         var dursecs = Math.floor(audio.duration - durmins * 60);
//     }
//     setInterval(()=>
//         this.seektimeupdate(),
//         1000
//     )
//     audio.onended = (event) => {
//         console.log(event)
//     }


// }
// Mute = () => {
//     if (audio.muted) {
//         audio.muted = false;
//     } else {
//         audio.muted = true;
//     }
// }