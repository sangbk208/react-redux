import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchUser} from '../../redux/actions';

class UserHeader extends Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }
    
    render() {
        console.log(this.props.fetchUserData);
        return (
            <div className="header">
                {/* {!this.props.fetchUserData? null: this.props.fetchUserData.name} */}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        fetchUserData: state.fetchUserData,
    };
}

export default connect(
    mapStateToProps,{fetchUser}
)(UserHeader);