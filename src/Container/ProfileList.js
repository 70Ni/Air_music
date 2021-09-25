import React from 'react';
import ArtistsCard from '../Components/Cards/ArtistsCard/ArtistsCard';
import ProfileIcon from '../Components/Profile_Icon/ProfileIcon';
import {shuffle} from '../Container/FUNCTIONS'

import { Music } from '../Json/Music';

const ProfileData = Array.from(new Set(Music.map(art => art.Artist)))
    .map(id => {
        return {
            name: id,
            Image: Music.find(s => s.Artist === id).Artist_image,
            Id:Music.find(s => s.Artist === id).id
        }
    })



const ArtistList = () => {

    return (
        <div style={{ display: 'flex' }}>
            {
                shuffle(ProfileData).map((user, i) => {
                    return (
                        <ArtistsCard
                            key={user.Id}
                            name={user.name}
                            Image={user.Image}
                        />
                    )
                })
            }
        </div>
    );
}


export default ArtistList;