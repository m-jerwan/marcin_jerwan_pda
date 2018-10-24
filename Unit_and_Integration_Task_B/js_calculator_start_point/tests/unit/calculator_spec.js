var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  // it('it has a sample test', function(){
  //   assert.equal(true, true)
  // })

  it('should multiply 3x5 and get 15', function () {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    actual = calculator.runningTotal;
    assert.strictEqual(actual, 15);
  })

  it('should divide 21 / 7 and get 3', function () {
    calculator.previousTotal = 21;
    calculator.divide(7);
    actual = calculator.runningTotal;
    assert.strictEqual(actual, 3);
  })

  it('should add 1 + 4 and get 5', function () {
    calculator.previousTotal = 1;
    calculator.add(4);
    actual = calculator.runningTotal;
    assert.strictEqual(actual, 5);
  })

  it('should subtract 7 - 4 and get 3', function () {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    actual = calculator.runningTotal;
    assert.strictEqual(actual, 3);
  })

  it('should concatenate multiple number button clicks', function(){
    calculator.numberClick(1);
    calculator.numberClick(1);
    actual = calculator.runningTotal;
    assert.strictEqual(actual, 11);
  })

  it('should chain multiple operations together', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('=');
    actual = calculator.runningTotal;
    assert.strictEqual(actual, 2);
  })


  it('should clear the running total without affecting the calculation', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.clearClick();
    calculator.numberClick(1);
    calculator.operatorClick('=');
    actual = calculator.runningTotal;
    assert.strictEqual(actual, 2);
  })

});
