import HistoryProvider from "../../src/providers/history.provider";

describe('providers/history.provider', () => {
    let historyProvider: HistoryProvider;

    beforeAll(() => {
        historyProvider = new HistoryProvider();
    });

    afterEach(() => {
        historyProvider.clear();
    });

    it('should add entries', () => {
        historyProvider.push(3, 5, 'addition');
        const items: string[] = historyProvider.list();
        expect(items.length).toBeGreaterThan(0);
        expect(items[0]).toBe('3 addition 5');
    });

    it('should list entries', () => {
        historyProvider.push(3, 5, 'addition');
        historyProvider.push(6, 1, 'multiply');
        const items: string[] = historyProvider.list();
        expect(items.length).toBe(2);
        expect(items[0]).toBe('3 addition 5');
        expect(items[1]).toBe('6 multiply 1');
    });

    it('should clear entries', () => {
        historyProvider.push(3, 5, 'addition');
        let items: string[] = historyProvider.list();
        expect(items.length).toBeGreaterThan(0);
        historyProvider.clear();
        items = historyProvider.list();
        expect(items.length).toBe(0);
    });
});
