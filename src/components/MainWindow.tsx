import React, {useState} from 'react';
import s from "./counter.module.css";
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {changeCounterAC, resetCounterAC} from "../redux/counter-reducer";

/*type PropsType = {
    counter: number
    maxValue: number
    minValue: number
    changeCounter: () => void
    resetCounter: () => void
    buttonClicked: boolean
    previousMaxValue: number
    previousMinValue: number
}*/

export type CounterType = {
    maxValue: number,
    minValue: number,
    counter: number,
    buttonClicked: boolean,
    previousMinValue: number,
    previousMaxValue: number,
}
export const MainWindow = () => {
    let dispatch = useDispatch()
    let {
        minValue,
        maxValue,
        counter,
        buttonClicked,
        previousMinValue,
        previousMaxValue,
    } = useSelector((state: AppRootStateType) => state.counterer)


    const labelVariant = () => {
        if (!buttonClicked && (minValue < 0 || maxValue < 0 || maxValue <= minValue)) {
            return <label className={s.incorrectNumber} htmlFor="counter">Incorrect value</label>
        } else if (!buttonClicked) {
            return <label className={s.firstMessage} htmlFor="counter">Enter values and press "Set"</label>
        } else {
            return <div>{counter}</div>
        }
    }

    const changeCounter = () => {
      //  debugger
        dispatch(changeCounterAC())
    }
    const resetCounter = () => {
        dispatch(resetCounterAC())
    }

    return (

        <div className={s.counter}>
            <div className={counter === previousMaxValue ? s.numberError : s.number}>
               {labelVariant()}
            </div>
            <div className={s.buttons}>
                <Button className={s.click} title={'inc'} callBack={changeCounter}
                        disabled={counter === previousMaxValue || !buttonClicked || minValue < 0 || maxValue < 0 || maxValue <= minValue}/>
                <Button className={s.click} title={'reset'} callBack={resetCounter}
                        disabled={counter === previousMinValue || !buttonClicked}/>
            </div>

        </div>
    )
};

export default MainWindow;