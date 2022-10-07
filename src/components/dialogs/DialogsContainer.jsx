import { connect } from "react-redux/es/exports";
import Dialogs from "./Dialogs";
import { WithAuthRedirect } from "../HOC/WithAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsData : state.dialogs.dialogsData,
        messagesData : state.dialogs.messagesData
    };
}

export default compose(
    connect(mapStateToProps, {}),
    WithAuthRedirect
)(Dialogs)
