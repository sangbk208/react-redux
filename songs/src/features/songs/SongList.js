import React, { Component } from 'react'
import {connect} from 'react-redux';
import { selectSong } from '../../redux/actions/song';

class SongList extends Component {

    renderList(){
        console.log(this.props);
        return this.props.songs.map((song) => {
            return(
                <div className="item" key={song.title}>
                    <div className="right floated connect">
                        <button onClick={()=>this.props.selectSong(song)} className="ui button primary">
                            select
                        </button>
                    </div>

                    <div className="connect">
                        {song.title}
                    </div>
                </div>
            );
        });
    }
    
    render() {

        return (
         <div className="ui divided list">
             {this.renderList()}
         </div>
        );
    }
}

const mapStateToProps = (state) =>{
    console.log(state);
    return {
        songs: state.songs,
    };
}

export default connect(mapStateToProps,{selectSong})(SongList);
