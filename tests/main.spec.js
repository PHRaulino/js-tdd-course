/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';

describe('Calc', () => {
  // Smoke testes
  describe('Smoke testes', () => {
    it('should exist the calc lib', () => {
      expect(sum).to.exist;
    });

    it('should exist method `sum`', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });
    it('should exist method `sub`', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });
    it('should exist method `mult`', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });
    it('should exist method `div`', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when `sum(2, 2)`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('sub', () => {
    it('should return 4 when `sub(6, 2)`', () => {
      expect(sub(6, 2)).to.be.equal(4);
    });
    it('should return -4 when `sub(6, 10)`', () => {
      expect(sub(6, 10)).to.be.equal(-4);
    });
  });

  describe('Mult', () => {
    it('should return 4 when `mult(2, 2)`', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });

  describe('Div', () => {
    it('should return 2 when `div(4, 2)`', () => {
      expect(div(4, 2)).to.be.equal(2);
    });
    it('should return `Não é possivel divisão por zero!` when divide by 0', () => {
      expect(div(4, 0)).to.equal('Não é possivel divisão por zero!');
    });
  });
});
