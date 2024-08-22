const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(1, 3.1), 4);
    assert.strictEqual(calculateNumber(1, 3.5), 5);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(5.4, 3), 8);
    assert.strictEqual(calculateNumber(5.5, 3), 9);
    assert.strictEqual(calculateNumber(5.9, 3), 9);
    assert.strictEqual(calculateNumber(-1.3, 3.1), 2);
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(-0, 3.1), 3);
  });
});
