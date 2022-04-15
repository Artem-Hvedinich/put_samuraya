import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {PATH} from "../App";
import {StateType} from "../redax/reduxStore";
import {connect} from "react-redux";

let mapStateToPropsForRender = (state: StateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const WithAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<{ isAuth: boolean }> {
        render() {
           // if (!this.props.isAuth) return <Routes><Route path="*" element={<Navigate to={PATH.Login}/>}/></Routes>
            if (!this.props.isAuth) return <Navigate to={PATH.Login}/>
            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirect = connect(mapStateToPropsForRender)(RedirectComponent)
    return ConnectedAuthRedirect
}