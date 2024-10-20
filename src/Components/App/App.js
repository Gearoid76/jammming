import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor (props) {
    super (props); 
      this.state = {
        searchResults: [
          { name: 'Tiny Dancer', artist: 'Elton John', album: 'the best of Elton', id: 1 },
          { name: 'Tiny Dancer', artist: 'Rod Stward', album: 'Tiny dancer', id: 2 },
          { name: 'Tiny Dancer', artist: 'Bon Jovi', album: 'the best of', id: 3 },
          { name: 'Tiny Dancer', artist: 'U2', album: 'the child years', id: 4 }
        ],
        playlistTracks: [] 
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  } 

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
   // this.setState({ playlistTracks: tracks });
   this.setState({ playlistTracks: tracks }, () => {
      console.log('Uploaded playlistTacks', this.state.playlistTracks);
    });
  }
  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(savedTrack => savedTrack.id !== track.id);
    this.setState({ playlistTracks: tracks });
  }


  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar /> 
          <div className="App-playlist">
           <SearchResults 
              searchResults={this.state.searchResults} 
              onAdd={this.addTrack} 
          />  
           <Playlist 
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
          /> 
    </div>
  </div>
</div>
    )
  }
}

export default App;
