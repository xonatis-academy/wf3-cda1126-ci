import CalculatorService from "./services/calculator.service";
import HistoryProvider from "./providers/history.provider";
import InverserHelper from "./helpers/inverser.helper";

const historyProvider: HistoryProvider = new HistoryProvider();
const calculatorService: CalculatorService = new CalculatorService(historyProvider);

const setLeft = (x: number) => {
    document.querySelector('#result-left').innerHTML = x.toString();
}

const setRight = (x: number) => {
    document.querySelector('#result-right').innerHTML = x.toString();
}

const getLeft = (): number => {
    const value = document.querySelector('#result-left').innerHTML;
    return value ? parseFloat(value) : 0.0;
}

const getRight = (): number => {
    const value = document.querySelector('#result-right').innerHTML;
    return value ? parseFloat(value) : 0.0;
}

const setResult = (x: number) => {
    document.querySelector('#result').innerHTML = x.toString();
}

const clearResult = () => {
    document.querySelector('#result').innerHTML = '';
}

const getResult = (): number => {
    const value = document.querySelector('#result').innerHTML;
    return value ? parseFloat(value) : 0.0;
}

const refreshHistory = () => {
    const data: string[] = historyProvider.list();
    document.querySelector('#history-div').innerHTML = data.join('<br />');
}

[...(document.querySelectorAll('.number') as any)].forEach(x => {
    x.addEventListener('click', () => {
        setResult(getResult() * 10 + parseFloat(x.innerHTML));
    });
});
document.querySelector('#set-left').addEventListener('click', () => {
    setLeft(getResult());
    clearResult();
});
document.querySelector('#set-right').addEventListener('click', () => {
    setRight(getResult());
    clearResult();
});

const actions: {[key: string]: () => void} = {
    '+' : () => setResult(calculatorService.add(getLeft(), getRight())),
    '-' : () => setResult(calculatorService.sub(getLeft(), getRight())),
    'x' : () => setResult(calculatorService.multiply(getLeft(), getRight())),
    './.' : () => setResult(calculatorService.divide(getLeft(), getRight()))
};
[...(document.querySelectorAll('.operator') as any)].forEach(x => {
    x.addEventListener('click', () => {
        actions[x.innerHTML]();
        refreshHistory();
    });
});

document.querySelector('#inverse').addEventListener('click', () => {
    setResult(InverserHelper.inverse(getResult()));
});

document.querySelector('#clear-result').addEventListener('click', () => {
    clearResult();
});

document.querySelector('#clear-history').addEventListener('click', () => {
    historyProvider.clear();
    refreshHistory();
});