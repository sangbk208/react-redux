import React, { Component } from 'react'
import Postlist from '../blog/PostList'
import {fetchPosts} from '../../redux/actions';
import {connect} from 'react-redux';

class App extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }
    
    
  
    render() {
        console.log(this.props.fetchPosts);
        return (
            <div className="ui container">
                <Postlist/>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        fetchPosts: state.fetchPosts,
    }
}

export default connect(mapStateToProps ,{fetchPosts})(App)
