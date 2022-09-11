import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { setUserProfile } from "../../state/profileReducer";
import { connect } from "react-redux/es/exports";

class ProfileContainer extends React.Component {
    componentDidMount(){
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/profile/${2}`
            )
            .then((res) => {
                this.props.setUserProfile(res.data);
            });
    }

    render(){
        return <Profile {...this.props}/>
    }

}

let mapStateToProps = (state) => {
    return {
        profile : state.profile.profile
    };
};

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);


// export default ProfileContainer;

