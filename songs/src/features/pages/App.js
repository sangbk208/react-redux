import React from 'react';
import SongDetail from '../songs/SongDetail';
import SongList from '../songs/SongList';

// import PropTypes from 'prop-types';

App.propTypes = {
    
};

function App(props) {
    return (
        <div className="ui container gird">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList/> 
                </div>
                <hr/>
                <div>
                    <SongDetail/>
                </div>
            </div>
        </div>
    );
}

export default App;