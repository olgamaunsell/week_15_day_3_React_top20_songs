import React from 'react';
import SongList from '../components/SongList';

class SongContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      selectedSongIndex: null
    }

  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", () => {
      if(request.status !== 200) return;
      const jsonString = request.responseText;
      const iTunesData = JSON.parse(jsonString);
      this.setState({songs: iTunesData.feed.entry})
    });
    request.send();
  }

  handleSongSelected(index){
    this.setState({selectedSongIndex: index})
  }

  render() {
    return (
      <div>
        <h2>UK Top 20 Songs</h2>
          <SongList data = {this.state.songs}/>
      </div>
    )
  }
}

export default SongContainer;
