import { connect } from "react-redux/es/exports";
import Dialogs from "./Dialogs";
import { WithAuthRedirect } from "../HOC/WithAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogsData : state.dialogs.dialogsData,
        messagesData : state.dialogs.messagesData
    };
}

// Create HOC
let redirectComponent = WithAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, {})(redirectComponent);
export default DialogsContainer;