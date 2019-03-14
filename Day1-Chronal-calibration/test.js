const assert = require('assert');
const calibrate = require('./calibrate');


//Day One's part one test
const valu = calibrate(`+1
-2
+3
+1`);
console.log("VALUE IS : " + valu)

describe('Part one calibrate', () => {
    it('should return 3 when input is +1, -2, +3, +1', () => {
        let input =
            `+1
        -2
        +3
        +1`;
        assert.strictEqual(calibrate(input), 3);
    });

    it('should return 3 when the imput is +1, +1, +1', () => {
        let input =
            `+1
        +1
        +1`;
        assert.strictEqual(calibrate(input), 3);
    })

    it('should return 0 when input is +1, +1, -2', () => {
        let input =
            `+1
        +1
        -2`;
        assert.strictEqual(calibrate(input), 0);
    });

    it('should return 6 when the tnput is -1, -2, -3', () => {
        let =
            `-1
        -2
        -3`;
        assert.strictEqual(calibrate(input), -6)
    })
});

describe('part two calibrate : ', () => {
    it('should return 2 when  input is +1, -2, +3, +1', () => {
        let input = `+1
        -2
        +3
        +1`;
        assert.strictEqual(calibrateTwo(input), 2);
    })

    it('should retrun 10 when input is +3, +3, +4, -2, -4', () => {
        let input =
            `+3
        +3
        +4
        -2
        -4`;
        assert.strictEqual(calibrateTwo(input), 10)
    })

    it('should return 5 when input is -6, +3, +8, +5, -6', () => {
        let input =
            `-6
        +3
        +8
        +5
        -6`;
        assert.strictEqual(calibrateTwo(input), 5);
    });

    it('should return 14 when input is +7, +7, -2, -7, -4', () => {
        let input =
            `+7
        +7
        -2
        -7
        -4`;
        assert.strictEqual(calibrateTwo(input), 14);
    });
})