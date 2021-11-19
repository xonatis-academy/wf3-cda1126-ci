import IHistoryProvider from "../../src/providers/history.provider.interface";

export default class MockHistoryProvider implements IHistoryProvider {
    public push(left: number, right: number, operator: string): void {
        
    }
    public clear(): void {
        
    }
    public list(): string[] {
        return [];
    }

}