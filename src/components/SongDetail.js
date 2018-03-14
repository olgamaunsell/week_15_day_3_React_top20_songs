import React from 'react';

const SongDetail = (props) => {
  console.log("props", props);
  return (

  <div>
    <p>Position: {props.position}</p>
    <p>Title: {props.title}</p>
    <p>Artist: {props.artist}</p>
  </div>
  )
}

export default SongDetail;
