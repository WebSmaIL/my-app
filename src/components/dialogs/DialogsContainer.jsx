import { connect } from "react-redux/es/exports";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogsData : state.dialogs.dialogsData,
        messagesData : state.dialogs.messagesData
    };
}
let mapDispatchToProps = (dispatch) => {
    return {};
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer