import InverserHelper from "../../src/helpers/inverser.helper";

describe('helpers/inverser.helper', () => {
    beforeAll(() => {
        new InverserHelper(); // Fix
    });

    it('should inverse numbers', () => {
        expect(InverserHelper.inverse(3)).toBe(-3);
    });
});
