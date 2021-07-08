import React, { useMemo } from 'react';
import ListCardB from '../../Components/Cards/ListCard/ListCardB';
import { shuffle, numFormatter } from '../../Container/FUNCTIONS'

import { Music } from '../../Json/Music';


export const MusicIds = [];


let ShuffledArray = () => shuffle(Music)


export const array = { group: ShuffledArray().slice(0, 3), isLoop: false };



