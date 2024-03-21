import React from 'react';
import './MainPage.css'
import Main from "../components/Main";
import Button from "../utils/Button";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../store/actions";
import {RootState} from "../App";

const MainPage = () => {

    const testNumber = useSelector<RootState, number>(state => state.testNumber);
    const dispatch = useDispatch();

    return (
        <Main>
            <h1 className="main-page-heading">{process.env.REACT_APP_NAME}</h1>
            <p className="main-page-greeting">Hello everyone! We are delighted that you are visiting our website and would like to thank you for your interest to our company.</p>
            <div className="button-click">
                <Button onClick={() => dispatch(increment())}>Increment</Button>
                <Button onClick={() => dispatch(decrement())}>Decrement</Button>
            </div>
            <h2>Test Number: {testNumber}</h2>
        </Main>


    );
};

export default MainPage;