import React from "react";
import {Header} from "./Header";
import {StateType} from "../../redax/reduxStore";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redax/authReducer";

export class HeaderContainer1 extends React.Component<any, any> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <>
            <Header login={this.props.login}
                    isAuth={this.props.isAuth}/>
        </>
    }
}

type MapStateToPropsType = {
    login: string
    isAuth: boolean
}

let mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}
export const HeaderContainer = connect(mapStateToProps,
    {getAuthUserData})(HeaderContainer1)