import InverserHelper from "../../src/helpers/inverser.helper";

describe('helpers/inverser.helper', () => {
    beforeAll(() => {
        new InverserHelper(); // Fix
    });

    it('should add entries', () => {
        expect(InverserHelper.inverse(3)).toBe(-3);
    });
});
