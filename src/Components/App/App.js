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
        playlistName: 'MyPlaylist',
        playlistTracks: [
          { name: 'PlaylistAlbum1', artist: 'PlaylistArtist1', album: 'playlistAlbum1', id: 5 },
          { name: 'PlaylistAlbum2', artist: 'PlaylistArtist2', album: 'playlistAlbum2', id: 6 },
          { name: 'PlaylistAlbum3', artist: 'PlaylistArtist3', album: 'playlistAlbum3', id: 7 },
        ] 
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
   this.setState({playlistTracks: tracks})
   
  }
  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id); 
    this.setState({ playlistTracks: tracks });
  }
  updatePlaylistName(name) {
    this.setState({ playlistName: name })
  }

  savePlaylist() { 
    alert("this button is working")
     const trackURIS = this.state.playlistTracks.map(track => track.uri);
     const playlistName  = this.state.playlistName;
     if (trackURIS.length && playlistName) {
      console.log(`Saving playlist: ${playlistName}`, trackURIS);
     } else {
      console.log('No tracks or playist to save.')
    }
  }
  search(term) {
    console.log(`Searching for ${term}`);
  
    const mockResults = [
      { name: 'Song A', artist: 'Artist A', album: 'Album A', id: 8, uri: 'spotify:track:1' },
      { name: 'Song B', artist: 'Artist B', album: 'Album B', id: 9, uri: 'spotify:track:2' },
      { name: 'Song C', artist: 'Artist C', album: 'Album C', id: 10, uri: 'spotify:track:3' }
    ];

    this.setState({ searchResults: mockResults });
  }
  
    


  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar 
              onSearch={this.search} /> 
          <div className="App-playlist">
           <SearchResults 
              searchResults={this.state.searchResults} 
              onAdd={this.addTrack} 
          />  
           <Playlist 
              playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks} 
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}  
          /> 
    </div>
  </div>
</div>
    )
  }
}

export default App;
