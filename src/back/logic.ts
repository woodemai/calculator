function isLetter(str: string) {
    return str.length === 1 && RegExp(/[a-z]/i).exec(str);
}

function isSymbol(str: string) {
    return str.length === 1
        && (str === "×"
            || str === "-"
            || str === "+"
            || str === "÷"
            || str === "/"
            || str === "\\"
            || str === "*");
}

export function solve(input: string) {
    input = input.trim().toLowerCase();
    let num1: string = '';
    let num2: string = '';
    let isFirstNumComplete: boolean = false;
    let sign: string = '';
    for (let i = 0; i < input.length; i++) {
        const current: string = input.charAt(i);
        if (current === " ") {
            isFirstNumComplete = true;
        } else if (isSymbol(current)) {
            sign = current;
        } else if (!isLetter(current)) {
            if (!isFirstNumComplete) {
                num1 += current;
            } else {
                num2 += current;
            }
        } else {
            return new Error("Ошибка ввода!");
        }
    }
    return calculation(Number(num1), Number(num2), sign);

}
function calculation(num1:number, num2:number, sign:string) {
    if (!isSymbol(sign)) return new Error("Ошибка ввода!");
    if (sign === "+") {
        return Number(num1) + Number(num2);
    } else if (sign === "-") {
        return Number(num1) - Number(num2);
    } else if (sign === "÷" || sign === "/") {
        return Number(num1) / Number(num2);
    } else if (sign === "×" || sign === "*") {
        return Number(num1) * Number(num2);
    }
}