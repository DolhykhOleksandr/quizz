import React from 'react';
import './MainPage.css'
import Main from "../components/Main";

const MainPage = () => {
    return (
        <Main>
            <h1 className="main-page-heading">{process.env.REACT_APP_NAME}</h1>
            <p className="main-page-greeting">Hello everyone! We are delighted that you are visiting our website, and would like to thank you for your interest to our company.</p>
        </Main>

    );
};

export default MainPage;