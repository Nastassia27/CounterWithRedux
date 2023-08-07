import React, {ChangeEvent} from 'react';

type PropsType={
    value: number
    type: string
    id: string
    callback:(e: ChangeEvent<HTMLInputElement>)=>void
    class: string
}
const Input = (props: PropsType) => {
    const onChangeHandler=(e: ChangeEvent<HTMLInputElement>)=>{
        props.callback(e)
    }
    return(
        <input className={props.class} type={props.type} id={props.id} value={props.value} onChange={onChangeHandler}/>
    )
};

export default Input;