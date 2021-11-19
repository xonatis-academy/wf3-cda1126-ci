export default class HistoryProvider {
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