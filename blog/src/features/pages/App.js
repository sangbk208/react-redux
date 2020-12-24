import React, { Component } from 'react'
import PostList from '../blog/PostList'
import {fetchPosts} from '../../redux/actions';
import {connect} from 'react-redux';

class App extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        
        return (
            <div className="ui container">
                <PostList/>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        fetchPostsData: state.fetchPostsData,
    }
}

export default connect(mapStateToProps ,{fetchPosts})(App)
