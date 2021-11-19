import React from "react";
import './Lyrics.css'
function Lyrics() {
  return (
    <div className="Lyrics_Wrapper">
      <div className="lyrics_content">
        <div className="lyrics_Image">
          <img src="" alt="" />
        </div>
        <div className="lyricsHdr_wrp">
          <div className="SUBheader">Lyrics</div>
          <img src="" alt="" />
        </div>
        <div className="lyrics_lenght_wrpr">
          <div className="lyrics_length"></div>
        </div>
        <div className="lyrics_box_wrpr">
          <div className="lyrics_txt">
            Rebekah rode up on the afternoon train It was sunny Her saltbox
            house on the coast Took her mind off St. Louis Bill was the heir to
            the Standard Oil name and money And the town said, "How did a
            middle-class divorcée do it?"
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lyrics;
