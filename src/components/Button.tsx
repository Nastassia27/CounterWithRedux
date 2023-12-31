import React from "react";
import s from './counter.module.css'

type ButtonType = {
    title: string
    className: string;
    callBack: () => void;
    disabled?: boolean;
}
export const Button: React.FC<ButtonType> = (props) => {
    const {title, callBack, ...restProps} = props
    const onCLickHandler = () => {
        callBack()
    }

    return (
        <button className={restProps.className} disabled={restProps.disabled} onClick={onCLickHandler}>{title}</button>
    )
}