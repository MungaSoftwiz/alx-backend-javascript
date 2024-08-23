const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers', () => {
    expect(calculateNumber('SUM', 1, 3.1)).to.equal(4);
    expect(calculateNumber('SUM', 5.5, 3)).to.equal(9);
    expect(calculateNumber('SUM', -1.3, 3.1)).to.equal(2);
    expect(calculateNumber('SUM', -0, 3.1)).to.equal(3);
  });

  it('should return the subtraction of two rounded numbers', () => {
    expect(calculateNumber('SUBTRACT', 1, 3.1)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 5.5, 3)).to.equal(3);
    expect(calculateNumber('SUBTRACT', -1.3, 3.1)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', 77, -0)).to.equal(77);
  });

  it('should return the division of two rounded numbers', () => {
    expect(calculateNumber('DIVIDE', 1, 3.1)).to.be.closeTo(0.3333333333333333, 1e-10);
    expect(calculateNumber('DIVIDE', 5.5, 3)).to.equal(2);
    expect(calculateNumber('DIVIDE', -1.3, 3.1)).to.be.closeTo(-0.3333333333333333, 1e-10);
  });

  it('should return an error on dividing by zero', () => {
    expect(calculateNumber('DIVIDE', 77, 0)).to.equal('Error');
  });

  it('should return an error on dividing with zero', () => {
    expect(() => calculateNumber('INVALID', 1, 1)).to.throw('Invalid type');
  });
});
