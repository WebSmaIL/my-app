import React from "react";
import { StyledInput } from "./profileStatus_styles";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({editMode: true});
    }
    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render () {
        return (
            <>
                {
                this.state.editMode ? 
                    <div>
                        <StyledInput onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
                    </div>
                    :
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{(!this.props.status) ? "Not Found Status" : this.props.status}</span>
                    </div>
                }
            </>
        );
    }
}

export default ProfileStatus;
