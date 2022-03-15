import React from "react";
import {sendMessageCreator, updateMewMessageBodyCreator} from "../../redax/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {StateType} from "../../redax/reduxStore";

let mapStateToProps = (state: StateType) => {
    return {
        messagesPage: state.messagesPage
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

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)