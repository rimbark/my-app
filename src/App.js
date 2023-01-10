import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <Sidebar state={props.state.friendsData}/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path="/profile/*" element={<Profile state={props.state.profilePage}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs state={props.state.messagesPage}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
