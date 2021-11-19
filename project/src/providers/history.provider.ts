import IHistoryProvider from "./history.provider.interface";

export default class HistoryProvider implements IHistoryProvider {
    private static History: string[] = [];

    public push(left: number, right: number, operator: string): void {
        HistoryProvider.History.push(`${left} ${operator} ${right}`);
    }

    public clear(): void {
        HistoryProvider.History = [];
    }

    public list(): string[] {
        return HistoryProvider.History;
    }
}