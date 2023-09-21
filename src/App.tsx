import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Counter from "./counter";


function App() {



    const [count, setCount] = useState<string | number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)
    const [disabled, setDisabled] = useState(false)
    const [incorrectValue, setIncorrectValue] = useState<boolean | string>(false);

    const validate = startValue > 0 || maxValue > 0 || startValue < maxValue
    const inc = () => {
        setCount(+count + 1);
        localStorage.setItem("value", JSON.stringify(+count + 1));
        localStorage.removeItem("count");

    }
    const reset = () => {
        setCount(startValue)
        setCount(0)

    }

    const set = () => {
        if (maxValue <= 0 || startValue >= maxValue){
            setDisabled(true);
            setIncorrectValue(true);
            setCount(0);

        } else {
            setDisabled(false);
            setIncorrectValue(false);
            setCount(startValue);
        }
        localStorage.setItem("startValue", JSON.stringify(startValue))
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
    }

    function handleMaxValueChange(event: ChangeEvent<HTMLInputElement>) {
        const value = Number(event.currentTarget.value)
        setMaxValue(value);
        setCount("");
        if (value <= 0 || value <= startValue) {
            setDisabled(true);
            setIncorrectValue(true);
            setStartValue(0);
        } else {
            setDisabled(false);
            setIncorrectValue(false);
        }
    }

    function handleStartValueChange(event: ChangeEvent<HTMLInputElement>) {
        const value = Number(event.currentTarget.value)
        setStartValue(value);
        setCount("")
        if (value < 0 || value >= maxValue) {
            setDisabled(true);
            setIncorrectValue(true);
        } else {
            setDisabled(false);
            setIncorrectValue(false);
        }
        setStartValue(value)
    }

    return (
        <div className="App">
            <Counter
                reset={reset}
                inc={inc}
                set={set}
                disabled={startValue === 5}
                maxValue={maxValue}
                startValue={startValue}
                incorrectValue={incorrectValue}
                count={count}
                handleMaxValueChange={handleMaxValueChange}
                handleStartValueChange={handleStartValueChange}
                validate={validate}
            />
        </div>
    );
}
export default App;


