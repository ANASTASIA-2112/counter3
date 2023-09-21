import React from "react";
import './App.css';
import {PropsType} from "./counter";


export function Button(props:PropsType) {


    return (
        <div className={"button"}>
            <h1 className={props.maxValue === props.count ? "red" : ""}>
                {props.count}
            </h1>


                <h1 className="red">
                    {!props.validate ? 'Incorrect value !' :""}
                        <p className={"blue"}> {props.validate ? "Enter values and press Set" : ""}</p>
                </h1>



            <button
                className={"button"}
                value={"inc"}
                onClick={props.inc}
                disabled={props.count === props.maxValue}
            >
                inc
            </button>
            <button
                className={"button"}
                value={"reset"}
                onClick={props.reset}
            >
                reset
            </button>
        </div>
    );
}
export default Button;