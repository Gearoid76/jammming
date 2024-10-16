import React from 'react';
import './SearchResults.css';

class  SearchResults extends React.Component {
    render () {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <ul>
                    {this.props.results.map(result => (
                        <li key={result.id}>
                            <p>Name: {result.name}</p>
                            <p>Artist: {result.artist}</p>
                            <p>Album: {result.album}</p>
                        </li>
                    )) }
                </ul>   
                {/* <TrackList /> */}
            </div>
        )
    }
}

export default  SearchResults;