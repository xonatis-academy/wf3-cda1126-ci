export default interface IHistoryProvider {
    push(left: number, right: number, operator: string): void;
    clear(): void ;
    list(): string[];
}