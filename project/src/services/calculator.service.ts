import IHistoryProvider from "../providers/history.provider.interface";

export default class CalculatorService {
    private readonly historyProvider: IHistoryProvider;

    public constructor(historyProvider: IHistoryProvider) {
        this.historyProvider = historyProvider;
    }

    public add(x: number, y: number): number {
        this.historyProvider.push(x, y, 'addition');
        return x + y;
    }
    public sub(x: number, y: number): number {
        this.historyProvider.push(x, y, 'substraction');
        return x - y;
    }
    public multiply(x: number, y: number): number {
        this.historyProvider.push(x, y, 'multiply');
        return x * y;
    }
    public divide(x: number, y: number): number {
        this.historyProvider.push(x, y, 'divide');
        return x / y;
    }
}