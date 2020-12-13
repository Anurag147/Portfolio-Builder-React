import React from 'react';
import './Profile.css';

class Profile extends React.Component{
    render(){
        return (
            <div>
                <img src={this.props.imageSource} alt="Avatar"/>
            </div>
        )
    }
}

export default Profile;