import logNoop from "./index";

describe('#logNoop', () => {
    it('should log noop', () => {
        logNoop();
        expect(noop).toHaveBeenCalled();
    });
});
