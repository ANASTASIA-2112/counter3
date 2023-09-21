import Button from "./button";
import Display from "./display";
import React, {ChangeEvent} from "react";


export  type PropsType = {
    count: number | string
    inc: () => void
    reset: () => void
    maxValue: number|string
    set: () => void
    disabled: boolean
    startValue: number|string
    incorrectValue: boolean | string
    handleStartValueChange: (event: ChangeEvent<HTMLInputElement>) => void
    handleMaxValueChange: (event: ChangeEvent<HTMLInputElement>) => void
    validate: boolean

}


export const Counter = (props: PropsType) => {

    return (

        <div>

            <Button
                reset={props.reset}
                inc={props.inc}
                set={props.set}
                disabled={props.startValue === 5}
                maxValue={props.maxValue}
                startValue={props.startValue}
                incorrectValue={props.incorrectValue}
                count={props.count}
                handleMaxValueChange={props.handleMaxValueChange}
                handleStartValueChange={props.handleStartValueChange}
                validate={props.validate}
            />
            <Display
                startValue={props.startValue}
                maxValue={props.maxValue}
                set={props.set}
                incorrectValue={props.incorrectValue}
                handleMaxValueChange={props.handleMaxValueChange}
                handleStartValueChange={props.handleStartValueChange}
                disabled={props.disabled}
                count={props.count}
                reset={props.reset}
                inc={props.inc}
                validate={props.validate}


            />


        </div>
    );
};

export default Counter;