import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Favorite from "../../../Images/Icons/save.svg";
import info from "../../../Images/Icons/list.svg";
import { isFavorite } from "../../../Redux/favorite";
import { indexFind } from "../../../Redux/IndexFinder";

import "./PlayListCard.css";

function PlayListCard({ id, newarray, image, name, artist, duration }) {
  const [Group, setGroup] = useState(0);
  const MusicLoaded = useSelector((state) => state.MusicLoaded);

  useEffect(() => {
    setGroup(newarray);
  }, [MusicLoaded.ClickedMusic]);

  const fav = useSelector((state) => state.favorite.id);
  const dispatch = useDispatch();

  let contrast =
    MusicLoaded.ClickedMusic === id
      ? { color: "#F27E4C", fontWeight: "700", opacity: "1" }
      : null;
  let nowPlaying =
    MusicLoaded.ClickedMusic === id
      ? { visibility: "visible" }
      : { visibility: "hidden" };
  let isfavorite = fav.includes(id);
  return (
    <div className="ItemCard_wrapper" key={id}>
      <div
        className="ItemCard_content"
        onClick={() => dispatch(indexFind({ id, Group }))}
      >
        <div className="Item_image_section">
          <img src={image} className="Item_Image" alt="" />
        </div>
        <div className="Item_details_wrapper">
          <div className="Item_Details_section">
            <div className="ArtistName_B">{artist}</div>
            <div className="MusicName_B no-wrap" style={contrast}>
              {name}
            </div>
            <div className="Item_footer_wrapper">
              <div className="Duration_C">{duration}</div>
              <img
                src={isfavorite ? info : Favorite}
                alt=""
                className="Favorite"
                onClick={() => dispatch(isFavorite({ id, name }))}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayListCard;
