import React, {ChangeEvent, useState} from 'react';
import s from "./counter.module.css";
import {Button} from "./Button";
import Input from "./Input";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {CounterType} from "./MainWindow";
import {onChangeMaxAC, onChangeMinAC, setValueAC} from "../redux/counter-reducer";

/*
type PropsTypes = {
    maxValue: number
    minValue: number
    changeMax:(event: ChangeEvent<HTMLInputElement>)=>void
    changeMin:(event: ChangeEvent<HTMLInputElement>)=>void
    setValue:()=>void
}
*/

export const SetValues = () => {
    let dispatch = useDispatch()
    let {
        minValue,
        maxValue,
        ...restProps
    } = useSelector((state: AppRootStateType) => state.counterer)


    const changeMax = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeMaxAC(event))
    }
    const changeMin = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeMinAC(event))
    }
    const setValue = () => {
        dispatch(setValueAC())

    }
    return (
        <div className={s.counter}>
            <div className={s.inputgroup}>
                <label htmlFor="maxValue">Max Value</label>
                <Input class={maxValue < 0 || maxValue <= minValue ? s.inputError : ''} type={'number'} id={'maxValue'}
                       value={maxValue} callback={changeMax}/>
            </div>
            <div className={s.inputgroup}>
                <label htmlFor="minValue">Min Value</label>
                <Input class={minValue < 0 || maxValue <= minValue ? s.inputError : ''} type={'number'} id={'minValue'}
                       value={minValue} callback={changeMin}/>
            </div>
            <div className={s.buttons}>
                <Button disabled={minValue < 0 || maxValue < 0 || maxValue <= minValue} className={s.click}
                        title={'Set'} callBack={setValue}/>
            </div>
        </div>
    );
};

export default SetValues;