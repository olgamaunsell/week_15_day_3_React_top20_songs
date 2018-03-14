import React from 'react';

const SongDetail = (props) => {
  console.log("props", props);
  return (

  <div>
    <p>Position: {props.position}</p>
    <p>Title: {props.title}</p>
    <p>Artist: {props.artist}</p>
    <img src={props.image} alt="image of song cover" width='300px'/>
  </div>
  )
}

export default SongDetail;
