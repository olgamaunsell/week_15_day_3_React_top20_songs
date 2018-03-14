import React from 'react';

const SongDetail = (props) => {
  console.log("props", props);
  return (

  <div>
    <p>Position: {props.position}</p>
    <p>Title: {props.title}</p>
    <p>Artist: {props.artist}</p>
    <a href={props.link} alt="click for preview"><img
        src={props.image}
        alt="song cover"
        width='300px'
      /></a>
  </div>

  )
}

export default SongDetail;
