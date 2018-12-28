import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {

    renderList() {
        return this.props.songs.map( (song) => {
            return (
                <div className="item" key = {song.title}>
                    <div className = "row">
                        <button className = "blue" >Select</button>
                        <div className = "col s6">{song.title}</div>
                    </div>
                </div>
            );
        });
    }

    render () {
        //this.props === { songs: state.songs }
        return <div>{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {
    return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);