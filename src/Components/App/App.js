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
        ]
    };
  } 
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar /> 
          <div className="App-playlist">
           <SearchResults searchResults = {this.state.searchResults} />  
           <Playlist /> 
    </div>
  </div>
</div>
    )
  }
}

export default App;
