import React, { Component } from 'react'
import {connect} from 'react-redux';

class SongDetail extends Component {
    renderDetail(){
        if (!this.props.selectedSong){
            return (<div>Select a song</div>);
        }
        return (
            <div>
                <h3>Detail for</h3>
                <div>Title: {this.props.selectedSong.title}</div>
                <div>Duration: {this.props.selectedSong.duration}</div>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderDetail()}
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        selectedSong: state.selectedSong,
    }
}

export default connect(mapStateToProps)(SongDetail);
