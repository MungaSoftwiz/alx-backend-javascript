const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3.1), 4);
    assert.strictEqual(calculateNumber('SUM', 5.5, 3), 9);
    assert.strictEqual(calculateNumber('SUM', -1.3, 3.1), 2);
    assert.strictEqual(calculateNumber('SUM', -0, 3.1), 3);
  });

  it('should return the subtraction of two rounded numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.1), -2);
    assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 3), 3);
    assert.strictEqual(calculateNumber('SUBTRACT', -1.3, 3.1), -4);
    assert.strictEqual(calculateNumber('SUBTRACT', 77, -0), 77);
  });

  it('should return the division of two rounded numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 3.1), 0.3333333333333333);
    assert.strictEqual(calculateNumber('DIVIDE', 5.5, 3), 2);
    assert.strictEqual(calculateNumber('DIVIDE', -1.3, 3.1), -0.3333333333333333);
  });

  it('should return an error on dividing by zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 77, 0), 'Error');
  });

  it('should return an error on dividing with zero', () => {
    assert.throws(() => calculateNumber('INVALID', 1, 1), /Invalid type/);
  });
});
