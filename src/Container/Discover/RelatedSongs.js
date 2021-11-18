import React, { useMemo } from "react";
import ListCardB from "../../Components/Cards/ListCard/ListCardB";
import { shuffle, numFormatter } from "../../Container/FUNCTIONS";

import { Music } from "../../Json/Music";

const RelatedSongs = () => {
  let ShuffledArray = () => shuffle(Music);
  const array = { group: ShuffledArray().slice(0, 6), isLoop: false };
  return (
    <div style={{width:'100%'}}>
      {array.group.map((song, i) => {
        return (
          <ListCardB
            newarray={array}
            key={i}
            id={song.id}
            preview={song.Preview.default}
            name={song.name}
            artist={song.Artist}
            views={numFormatter(song.Views)}
            likes={numFormatter(song.Likes)}
            duration={song.duration}
            URL={song.URL}
          />
        );
      })}
    </div>
  );
};

export default RelatedSongs;
