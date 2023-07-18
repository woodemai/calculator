import React, {useState} from 'react';
import styles from "../styles/inputs.module.css";
import Button from "./Button";
import {solve} from "../back/logic";
const Calculator = () => {
    const [inputValue, setInputValue] = useState<string>("");

    return (
        <div className={styles.wrapper}>
            <div className={styles.calc}>
                <div className={styles.textFieldSection}>
                    <input value={inputValue} className={styles.textField} placeholder={"2 + 2 = 4"} type={"text"}
                           disabled={false} onChange={(e) => setInputValue(e.target.value)}/>
                </div>
                <div className={styles.inputSection}>
                    <div>
                        <Button onClick={() => setInputValue("")}>AC</Button>
                        <Button onClick={() => setInputValue(inputValue.trimEnd().replace(/(\\s+)?.$/, ''))}>Del</Button>
                        <Button onClick={() => setInputValue(inputValue + " + ")}>±</Button>
                        <Button onClick={() => setInputValue(inputValue + " ÷ ")}>÷</Button>
                    </div>
                    <div>
                        <Button onClick={() => setInputValue(inputValue + "7")}>7</Button>
                        <Button onClick={() => setInputValue(inputValue + "8")}>8</Button>
                        <Button onClick={() => setInputValue(inputValue + "9")}>9</Button>
                        <Button onClick={() => setInputValue(inputValue + " × ")}>×</Button>
                    </div>
                    <div>
                        <Button onClick={() => setInputValue(inputValue + "4")}>4</Button>
                        <Button onClick={() => setInputValue(inputValue + "5")}>5</Button>
                        <Button onClick={() => setInputValue(inputValue + "6")}>6</Button>
                        <Button onClick={() => setInputValue(inputValue + " - ")}>-</Button>
                    </div>
                    <div>
                        <Button onClick={() => setInputValue(inputValue + "1")}>1</Button>
                        <Button onClick={() => setInputValue(inputValue + "2")}>2</Button>
                        <Button onClick={() => setInputValue(inputValue + "3")}>3</Button>
                        <Button onClick={() => setInputValue(inputValue + " + ")}>+</Button>
                    </div>
                    <div>
                        <Button onClick={() => setInputValue(inputValue + " % ")}>%</Button>
                        <Button onClick={() => setInputValue(inputValue + "0")}>0</Button>
                        <Button onClick={() => setInputValue(inputValue + ", ")}>,</Button>
                        <Button onClick={() => setInputValue(String(solve(inputValue)))}>=</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;