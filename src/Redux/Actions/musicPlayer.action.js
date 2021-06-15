

const setCurrentMusics = MusicItems => ({
    type:'SET_MUSIC_PLAYER',
    payload:MusicItems,
});


const setNextMusic = () => ({
    type:'SET_NEXT_MUSIC'
})

export default {setCurrentMusics,setNextMusic}