import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { artistId } from '../../Redux/selectArtist';

import './ProfileIcon.css'

function ProfileIcon({name,Image}) {
    const artist = useSelector(state => state.artistId)
    const dispatch = useDispatch();


    return (
        <div className="Profile_icon_wrapper" onClick={() => dispatch(artistId(name))}>
            <div className="Profile_icon_content">
                <img src={Image} alt="" className="Artist_avatar" />
                <div className="Profile_artist_Name">{ name }</div>
            </div>
        </div>
    );
}



// class ProfileIcon extends Component {

//     AristSelector = (name) => {
//         this.props.setId({
//             name: name
//         })
//     }
//     render() {
//         const { name, Image } = this.props

//     }
// }




export default ProfileIcon;
