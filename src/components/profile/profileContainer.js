import React from "react";
import Profile from "./Profile";
import { getUserProfileTC, getStatusTC, updateStatusTC } from "../../state/profileReducer";
import { connect } from "react-redux/es/exports";
import {
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";
import { WithAuthRedirect } from "../HOC/WithAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    componentDidMount(){
        let userId = (this.props.router.params["userId"]) ? this.props.router.params["userId"] : 2;
        this.props.getUserProfileTC(userId);
        this.props.getStatusTC(userId);
    }

    render(){
       return <Profile {...this.props}/>;
    }
}

let mapStateToProps = (state) => {
    return {
        profile : state.profile.profile,
        status : state.profile.status
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

export default compose(
    connect(mapStateToProps, { getUserProfileTC, getStatusTC, updateStatusTC}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)