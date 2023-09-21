
import {PropsType} from "./counter";


export const Display = ( props:PropsType) => {

    return (
            <div className={"input"}>
                <div className={"input"}>
                    Max value:{" "}
                    <input
                        className={"start"}
                        type="number"
                        value={props.maxValue}
                        style={{borderColor: props.incorrectValue ? "red" : "inherit"}}
                        onChange={props.handleMaxValueChange}
                    />
                    Start value:{" "}
                    <input
                        className={"start"}
                        type="number"
                        value={props.startValue}
                        style={{borderColor: props.incorrectValue ? "red" : "inherit"}}
                        onChange={props.handleStartValueChange}

                    />

                </div>
                <div className={"button"}>
                    <button
                        className={"button"}
                        value={"set"}
                        onClick={props.set}
                        disabled={props.startValue === props.maxValue}>set
                    </button>

                </div>
            </div>

    );
};

export default Display;