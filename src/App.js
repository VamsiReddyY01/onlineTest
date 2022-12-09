import './App.css';
import Home from './components/home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test1 from "./components/test1";
import Test2 from "./components/test2";
import Header from "./components/header";
import Footer from "./components/footer";
import React from "react";
import classes from './css/style.module.css';
import withNavigation from './components/withNavigation';
import LoginComponent from './components/Login';
import AuthenticatedRoute from './components/AuthenticatedRoute';

function App() {
    const LoginComponentWithNavigation = withNavigation(LoginComponent);
    return (
        <div className={classes.App} >

            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<LoginComponentWithNavigation />} />
                    <Route path="/login" element={<LoginComponentWithNavigation />} />
                    <Route path="/home" element={<AuthenticatedRoute><Home /></AuthenticatedRoute>} />
                    <Route path="/test1" element={<AuthenticatedRoute><Test1 /></AuthenticatedRoute>} />
                    <Route path="/test2" element={<AuthenticatedRoute><Test2 /></AuthenticatedRoute>} />
                    <Route path="/logout" element={<LoginComponentWithNavigation />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
