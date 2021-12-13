import React from 'react';
import Track from '../Track/Track';

class Tracklist extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {this.props.tracks.map(track => <Track key={track.id} track={track} onRemove={this.props.onRemove} onAdd={this.props.onAdd} isRemoval={this.props.isRemoval} />)}
            </div>     
        );
    }
}

export default Tracklist;