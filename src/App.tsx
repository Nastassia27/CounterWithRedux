import React, {useState} from 'react';
import logo from './logo.svg';
import s from './components/counter.module.css'
import './App.css';
import MainWindow from "./components/MainWindow";
import SetValues from "./components/SetValues";

function App() {

    return (
        <div className={s.wrapper}>
            <div>
                <SetValues/>

            </div>
            <div>
                <MainWindow/>
            </div>
            {/*<Counter/>*/}
        </div>
    )
}


export default App;
