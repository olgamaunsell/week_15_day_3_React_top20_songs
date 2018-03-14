import React from 'react'
import SongDetail from './SongDetail.js'

const SongList = (props) => {
  const top20 = props.data.map((song, index) => {
    return (
      <SongDetail
        key={index}
        position={index+1}
        title={song.title.label}
        artist={song['im:artist'].label}
        image={song['im:image'][2].label}
        link={song.link[1].attributes.href}
      />
    );
  });

  return (
    <div className="songList">
      {top20}
    </div>
  )


}

export default SongList;
