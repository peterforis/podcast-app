import calculateDuration from '../components/calculateDuration';

test('convert 1234567 MS to minute and second', () => {
    expect(calculateDuration(1234567)).toBe("20:34");
});

test('convert 654321 MS to minute and second', () => {
    expect(calculateDuration(654321)).toBe("10:54");
});

test('convert 333333 MS to minute and second', () => {
    expect(calculateDuration(333333)).toBe("5:33");
});

test('convert 1919191 MS to minute and second', () => {
    expect(calculateDuration(1919191)).toBe("31:59");
});