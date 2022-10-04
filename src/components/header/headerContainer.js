import React from "react";
import { connect } from "react-redux/es/exports";
import Header from "./Header";
import { getUserDataTC } from "../../state/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount () {
        this.props.getUserDataTC();
    }
    render () {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state)=> ({
    isAuth:state.auth.isAuth,
    login:state.auth.login
})

export default connect(mapStateToProps, {getUserDataTC})(HeaderContainer);