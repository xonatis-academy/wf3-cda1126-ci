import HistoryProvider from "../src/providers/history.provider";

describe('providers/history.provider', () => {
    let historyProvider: HistoryProvider;

    beforeEach(() => {
        historyProvider = new HistoryProvider();
    });

    it('should add entries', () => {
        historyProvider.push(3, 5, 'addition');
        const items: string[] = historyProvider.list();
        expect(items.length).toBeGreaterThan(0);
        expect(items[0]).toBe('3 addition 5');
    })
});