import React from "react";
import {sendMessageCreator, updateMewMessageBodyCreator} from "../../redax/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {StateType} from "../../redax/reduxStore";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";

let mapStateToProps = (state: StateType) => {
    return {
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageCreator())
        },
        updateMewMessageBody: (body: string) => {
            dispatch(updateMewMessageBodyCreator(body))

        }
    }
}

let AuthRedirectComponent = WithAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)