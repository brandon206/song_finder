import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectSong } from '../actions';

class SongList extends Component {

    renderList() {
        return this.props.songs.map( (song) => {
            return (
                <div className="item" key = {song.title}>
                    <div className = "row">
                        <div className="divider"></div>
                        <a onClick = {() => this.props.selectSong(song)} className="btn blue lighten-2">Select</a>
                        <div className = "col s6">{song.title}</div>
                    </div>
                </div>
            );
        });
    }

    render () {
        return <div>{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {
    return { songs: state.songs };
}

export default connect(mapStateToProps, {
    selectSong
})(SongList);