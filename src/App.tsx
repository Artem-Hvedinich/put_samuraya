import React from "react";
import './App.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Settings/Setting";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {StateType} from "./redax/state";

type AppPropsType = {
    state: StateType
    dispatch: (action: any) => void
    // addPost: () => void
    // updateNewPostText: (newPostText: string) => void
}
const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs
                            dialogs={props.state.messagesPage.dialogs}
                            messages={props.state.messagesPage.messages}
                            newMessageBody={props.state.messagesPage.newMessageBody}
                            dispatch={props.dispatch}
                        />}/>
                        <Route path='/profile' element={<Profile
                            myPostData={props.state.myPostPage.myPostData}
                            dispatch={props.dispatch}
                            newPostText={props.state.myPostPage.newPostText}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/setting' element={<Setting/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
