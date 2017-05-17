import React from 'react';
import { Link } from 'react-router';
import Albums from './Albums';
import Songs from './Songs';


class Artist extends React.Component {

  componentDidMount () {
    const artistId = this.props.routeParams.artistId;
    const selectArtist = this.props.selectArtist;

    selectArtist(artistId);
  }


  render () {
    const selectedArtist = this.props.artist.artist;
    const children = this.props.children;
    const propsToPassToChildren = {
          songs: Array.from(this.props.artist.songs),
          currentSong: this.props.currentSong,
          isPlaying: this.props.isPlaying,
          toggleOne: this.props.toggleOne,
          albums: Array.from(this.props.artist.albums)
    }

    return (
      <div>
        <h3>{ selectedArtist.name }</h3>
        <ul className="nav nav-tabs">
          <li><Link to={`/artists/${selectedArtist.id}/albums`}>ALBUMS</Link></li>
          <li><Link to={`/artists/${selectedArtist.id}/songs`}>SONGS</Link></li>
        </ul>
        { children && React.cloneElement(children, propsToPassToChildren) }
      </div>
    )
  }

}



export default Artist
