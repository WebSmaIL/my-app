import React from "react";
import Profile from "./Profile";
import { getUserProfileTC } from "../../state/profileReducer";
import { connect } from "react-redux/es/exports";
import {
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";
import { WithAuthRedirect } from "../HOC/WithAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount(){
        let userId = (this.props.router.params["userId"]) ? this.props.router.params["userId"] : 2;
        this.props.getUserProfileTC(userId);
    }

    render(){
       return <Profile {...this.props}/>;
    }
}

let mapStateToProps = (state) => {
    return {
        profile : state.profile.profile
    };
};

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

// Create HOC
let redirectComponent = WithAuthRedirect(ProfileContainer);

export default connect(mapStateToProps, { getUserProfileTC })(withRouter(redirectComponent));