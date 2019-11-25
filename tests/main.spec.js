/*

Desafio FizzBuzz

Escreva uma lib que receba um numero e:

Se o numero for divisivel por 3, no lugar do numero escreva 'Fizz' - X
Se o numero for divisivel por 5, no lugar do numero escreva 'Buzz' - X
Se o numero for divisivel por 3 e 5, no lugar do numero escreva 'FizzBuzz' - X
Se não for multiplo de nada, retorna o numero

*/
import { expect } from 'chai';
import FizzBuzz from '../src/main';

describe('Main', () => {
  it('should return `Fizz` when multiple of 3', () => {
    expect(FizzBuzz(3)).to.equal('Fizz');
    expect(FizzBuzz(6)).to.equal('Fizz');
  });

  it('should return `Buzz` when multiple of 5', () => {
    expect(FizzBuzz(5)).to.equal('Buzz');
    expect(FizzBuzz(10)).to.equal('Buzz');
  });

  it('should return `FizzBuzz` when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).to.equal('FizzBuzz');
  });

  it('should return the number when no-multiple', () => {
    expect(FizzBuzz(7)).to.equal(7);
  });
});
