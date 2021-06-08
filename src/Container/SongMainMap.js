import React from 'react';

import { Music } from '../Json/Music';



const MusicMap = Music.map((item, index) => item.URL)

let audio = new Audio(MusicMap)
console.log(audio)

export default MusicMap;