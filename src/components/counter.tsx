/*
import React, {ChangeEvent, useEffect, useState} from "react";
import s from './counter.module.css'
import {Button} from "./Button";
import SetValues from "./SetValues";
import MainWindow from "./MainWindow";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {
    changeCounterAC,
    onChangeMaxAC,
    onChangeMinAC,
    resetCounterAC,
    setValueAC
} from "../redux/counter-reducer";

export type CounterType = {
    maxValue: number,
    minValue: number,
    counter: number,
    buttonClicked: boolean,
    previousMinValue: number,
    previousMaxValue: number,
 }
export function Counter() {
    let dispatch = useDispatch()
   let counter = useSelector<AppRootStateType, CounterType>(state=> state.counter)
    /!*const {
        maxValue,
        minValue,
        counter,
        buttonClicked,
        previousMinValue,
        previousMaxValue
    }:CounterType = useSelector((state) => state);*!/

   /!* let [maxValue, setMaxValue] = useState<number>(() => {
        const storedValue = localStorage.getItem('Max value');
        return storedValue ? +JSON.parse(storedValue) : 1;
    });
    let [minValue, setMinValue] = useState<number>(() => {
        const storedValue = localStorage.getItem('Min value');
        return storedValue ? +JSON.parse(storedValue) : 0;
    })
    let [counter, setCounter] = useState<number>(() => {
        const storedValue = localStorage.getItem('Counter');
        console.log(typeof storedValue)

        return storedValue ? JSON.parse(storedValue) : 0;
    })
    let [buttonClicked, setButtonClicked] = useState<boolean>(false)
    let [previousMinValue, setPreviousMinValue] = useState(0);
    let [previousMaxValue, setPreviousMaxValue] = useState(0);*!/

   /!* useEffect(() => {
        localStorage.setItem('Min value', JSON.stringify(minValue))
        localStorage.setItem('Max value', JSON.stringify(maxValue))
        localStorage.setItem('Counter', JSON.stringify(counter))
    }, [minValue, maxValue, counter])*!/

    const onChangeMax = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeMaxAC(event))
    }
    const onChangeMin = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeMinAC(event))
    }
    const changeCounter = () => {
        dispatch(changeCounterAC())
    }
    const resetCounter = () => {
        dispatch(resetCounterAC())
    }
    const setValue = () => {
        dispatch(setValueAC())

    }
    return (
        <div className={s.wrapper}>
            <div>
                <SetValues
                  /!*  maxValue={counter.maxValue}
                    minValue={counter.minValue}
                    changeMax={onChangeMax}
                    changeMin={onChangeMin}
                    setValue={setValue}*!/

                />
            </div>
            <div>
                <MainWindow
                    /!*counter={counter}
                    maxValue={counter.maxValue}
                    minValue={counter.minValue}
                    changeCounter={changeCounter}
                    resetCounter={resetCounter}
                    buttonClicked={counter.buttonClicked}
                    previousMaxValue={counter.previousMaxValue}
                    previousMinValue={counter.previousMinValue}*!/
                />
            </div>


        </div>
    )
}*/
const x=null
export default x

