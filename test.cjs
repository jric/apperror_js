var apperror=require("./dist-cjs");
const { AppLogger } = apperror;

l = new AppLogger('test.cjs');

l.info('hello world');

describe('cjs', () => {
    it('should compile', () => {
        expect(1).toBe(1);
    });
});