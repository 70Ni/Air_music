import React from 'react';
import { flushSync } from 'react-dom';
import ProfileIcon from '../Components/Profile_Icon/ProfileIcon';

import { Music } from '../Json/Music';

const ProfileData = Array.from(new Set(Music.map(art => art.Artist)))

    .map(id => {
        return {
            name: id,
            Image: Music.find(s => s.Artist === id).Artist_image
        }
    })



    function shuffle(arra1) {
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

const ArtistList = () => {

    return (
        <div style={{display:'flex'}}>
            {
               shuffle(ProfileData).map((user, i) => {
                    console.log(Image)
                    return (
                        <ProfileIcon
                            key={i}
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