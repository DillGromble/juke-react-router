import React from 'react';
import { Link } from 'react-router'


class Artist extends React.Component {

  constructor (props) {
    super(props)
  }


  componentDidMount () {
    const artistId = this.props.routeParams.artistId;
    const selectArtist = this.props.selectArtist;

    selectArtist(artistId);
  }



  render () {
    console.log(this.props.artist.artist);
    return (
      <div>
        <h3></h3>
        <h4>ALBUMS</h4>
        <h4>SONGS</h4>
      </div>
    )
  }
}



export default Artist
