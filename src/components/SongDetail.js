import React from 'react';

const SongDetail = (props) => {
  console.log("props", props);
  return (

  <div>
    <h3>{props.position}. {props.title}</h3>
    <h4>{props.artist}</h4>
    <a href={props.link} alt="click for preview"><img
        src={props.image}
        alt="song cover"
        width='300px'
      /></a>
  </div>

  )
}

export default SongDetail;
