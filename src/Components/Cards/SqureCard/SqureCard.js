import React,{Component} from 'react';

import Favorite from '../../../Images/Icons/save.svg'
import Image from '../../../Music files/Justin Bieber/thumbnail/Changes.jpg'
import Play from '../../../Images/Icons/Play_fill.svg'
// import save from '../../../Images/Icons/save.svg';

import { IndexFinder, MusicGroupSet } from '../../../Container/FUNCTIONS'

import './SqureCard.css'

let Newarray = []

class SqureCard extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        Newarray.push(this.props)
    }

    render() {
        const {id,name, preview, artist} = this.props
        return (
            <div className="Squre_wrapper" onClick={() => IndexFinder(id, Newarray)}>
                <div className="Squre_content">
                    <div className="Squre_image_section">
                        <img src={Favorite} alt="" className="favorite_S" />
                        <div className="Squre_play_wrapper">
                            <img src={Play} className="Squre_play" alt="" />
                        </div>
                        <img src={preview} className="Squre_Image" alt="" />
                    </div>
                    <div className="Squre_Details_section">
                        <div className="ArtistName_B">{artist}</div>
                        <div className="MusicName_S">{name}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SqureCard;