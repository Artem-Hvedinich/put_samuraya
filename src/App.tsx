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
import {store, StoreType,} from "./redax/state";

type AppPropsType = {
    store: StoreType
    addPost: (message: string) => void
    updateNewPostText: (newPostText: string) => void
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
                            dialogs={props.store._state.messagesPage.dialogs}
                            messages={props.store._state.messagesPage.messages}/>}/>
                        <Route path='/profile' element={<Profile
                            myPostData={props.store._state.myPostPage.myPostData}
                            addPost={props.addPost}
                            updateNewPostText={store.updateNewPostText}
                            newPostText={props.store._state.myPostPage.newPostText}
                        />}/>
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
