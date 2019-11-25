const { expect } = require('chai');

describe('Main', () => {
  let arr;

  before(() => {

  });

  after(() => {

  });

  beforeEach(() => {
    arr = [1, 2, 3];
  });

  afterEach(() => {

  });

  it('should be an array', () => {
    expect(arr).to.be.a('array');
  });

  it('should have a size of 4 when push another value to he array', () => {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('should remove 3 when use pop in the array', () => {
    arr.pop();
    expect(arr).to.not.include(3);
  });

  it('should have a size of 2 when pop a value from the array', () => {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });
});
