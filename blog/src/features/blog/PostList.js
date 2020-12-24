import React, { Component } from 'react'
import {connect} from 'react-redux';
import UserHeader from './UserHeader';

class PostList extends Component {

    renderPostList(){
        if (!this.props.fetchPostsData){
            return null;
        } 
        return this.props.fetchPostsData.map(post=>{
            return(
                <div className='item'  key={post.id}>
                    <i className="large middle aligned icon user"/>
                    <div className="container">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <UserHeader userId={post.userId}/>
                        </div>
                    </div>
                </div>
              
            );
        });
    }
   
    render() {
        return (
            <div>
                <div className="ui relaxed divided list">
                    {this.renderPostList()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fetchPostsData: state.fetchPostsData,
    }
}

export default connect(mapStateToProps)(PostList);
