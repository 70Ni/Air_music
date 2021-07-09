import Store from '../Redux/Store';


const shuffle = (arra1) => {
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



const MusicGroupSet = () => {
    if (Store.getState().MusicLoaded.ClickedMusic) {
        let index = Store.getState().MusicLoaded.IndexOfMusic
        audio.src = Store.getState().MusicLoaded.MusicGroup.group[index].URL.default
        audio.play();
    }
    audio.onended = () => {
        if( Store.getState().MusicLoaded.MusicGroup.isLoop ){
            Store.dispatch({type: "IndexFinder/SkipNext"})
        }
       
    }
}



// const FavoriteFunc = (id) => {
//     return store.dispatch({
//         type: 'SET_FAVORITE,',
//         payload: id
//     })
// }

// const AutoPlay = () => {
//     return store.dispatch({
//         type: 'SET_AUTO_PLAY',
//     })
// }

// function IndexFinder(id, localArray) {
//     let prevMusic = store.getState().player.prevMusic
//     if (prevMusic !== id) {
//         let r = localArray.map((toPlay) => toPlay.id === id).indexOf(true);
//         return store.dispatch({
//             type: 'SET_MUSIC_PLAYER',
//             payload: {
//                 ClickedMusic: id,
//                 IndexOfMusic: r,
//                 MusicGroup: localArray,
//                 prevMusic: id,
//             }
//         })

//     } PlayPause()
// }

// const PrevSong = () => {
//     const dispatch = useDispatch();
//     let MusicGroup = Store.getState().MusicLoaded.IndexOfMusic.MusicGroup;
//     let index = Store.getState().MusicLoaded.IndexOfMusic.IndexOfMusic;
//     if (index > 0) {
//         let PrevPlayIndex = index - 1;
//         let PrevPlayId = MusicGroup[PrevPlayIndex].id;
//         dispatch(indexFind({PrevPlayId,MusicGroup}))

//     }
// }

// const NextSong = () => {
//     let MusicGroup = store.getState().player.CurrentGroup.MusicGroup;
//     let index = store.getState().player.CurrentGroup.IndexOfMusic;
//     if (index + 1 < MusicGroup.length) {
//         let NextPlayIndex = index + 1;
//         let NextPlayId = MusicGroup[NextPlayIndex].id;
//         IndexFinder(NextPlayId, MusicGroup)
//     }
// }

// const seektimeupdate = () => {
//     if (audio.duration) {
//         // let nt = audio.currentTime * (100 / audio.duration);
//         var curmins = Math.floor(audio.currentTime / 60);
//         var cursecs = Math.floor(audio.currentTime - curmins * 60);
//         var durmins = Math.floor(audio.duration / 60);
//         var dursecs = Math.floor(audio.duration - (durmins * 60));
//         if (cursecs < 10) { cursecs = "0" + cursecs }
//         if (curmins < 10) { curmins = "0" + curmins }
//         if (durmins < 10) { durmins = "0" + durmins }
//         if (dursecs < 10) { dursecs = "0" + dursecs }

//         return Store.dispatch(TimerUpdates("worloc"))

//  (state, { payload }) =>{
//     state.AudioDuration = audio.duration
//     state.currentTime = audio.currentTime
//     state.cursecs = cursecs
//     state.curmins = curmins
//     state.durmins = durmins
//     state.dursecs = dursecs


// return store.dispatch({
//     type: 'SET_TIMER',
//     payload: {
//         AudioDuration: audio.duration,
//         currentTime: audio.currentTime,
//         cursecs: cursecs,
//         curmins: curmins,
//         durmins: durmins,
//         dursecs: dursecs,
//     }
// })

//     }
// }


// const searchMusic = (event) => {
//     return store.dispatch({
//         type: 'SEARCH_MUSIC',
//         payload: {
//             resutl: event
//         }
//     })
// }

const onChange = (slideValue) => {
    if (audio.duration) {
        let selectNumber = Number(slideValue)
        audio.currentTime = selectNumber
        audio.play();
    }
}
const Mute = () => {
    if (audio.muted) {
        audio.muted = false;
    } else {
        audio.muted = true;
    }
}

function setVolume(volumeValue) {
    audio.volume = volumeValue / 100;

    document.documentElement.style.setProperty('--volume', volumeValue);
}


export {
    MusicGroupSet, Mute, onChange, numFormatter, shuffle, setVolume, audio
}






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