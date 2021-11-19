import MockHistoryProvider from "../mocks/history.provider.mock";
import CalculatorService from "../../src/services/calculator.service";

describe('services/calculator.service', () => {
    let calculatorService: CalculatorService;

    beforeAll(() => {
        calculatorService = new CalculatorService(new MockHistoryProvider());
    });

    it('should add numbers', () => {
        expect(calculatorService.add(3, 5)).toBe(8);
    });

    it('should substract numbers', () => {
        expect(calculatorService.sub(3, 5)).toBe(-2);
    });

    it('should multiply numbers', () => {
        expect(calculatorService.multiply(3, 5)).toBe(15);
        expect(calculatorService.multiply(3, 0)).toBe(0);
    });

    it('should divide numbers', () => {
        expect(calculatorService.divide(6, 3)).toBe(2);
        expect(calculatorService.divide(6, 1)).toBe(6);
        expect(calculatorService.divide(0, 1)).toBe(0);
    });
});
