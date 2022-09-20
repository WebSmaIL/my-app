import React from "react";
import axios from "axios";
import { connect } from "react-redux/es/exports";
import Header from "./Header";
import { setUserData } from "../../state/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount () {
        axios.defaults.withCredentials = true;
        axios("https://social-network.samuraijs.com/api/1.0/auth/me", {method: 'GET', withCredentials: true}).then(res=>{
            console.log(res);
            if (res.data.resultCode == 0){
                console.log(res);
                let {id, email, login} = res.data.data;
                this.props.setUserData(id, email, login)
            }
        })
    }
    
    render () {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state)=> ({
    isAuth:state.auth.isAuth,
    login:state.auth.login
})

export default connect(mapStateToProps, {setUserData})(HeaderContainer);