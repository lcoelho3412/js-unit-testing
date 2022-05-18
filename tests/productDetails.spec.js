const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    /* fail('Teste vazio!'); */
    // ESCREVA SEUS TESTES ABAIXO:
  });
  const products = productDetails('Alcool gel', 'Máscara');

  // Teste se productDetails é uma função.
  it('Verifica se productDetails é uma função.', () => {
    expect(typeof productDetails).toBe('function');
  })

  // Teste se o retorno da função é um array.
  it('Verifica se o retorno da função é um array.', () => {
    expect(Array.isArray(products)).toBe(true)
  })

  // Teste se o array retornado pela função contém dois itens dentro.
  it('Verifica se o array retornado pela função contém dois itens dentro.', () => {
    expect(products.length).toBe(2);
  })

  // Teste se os dois itens dentro do array retornado pela função são objetos.
  it('Verifica se o array retornado pela função contém dois itens dentro.', () => {
    expect(typeof productDetails('Um item', 'Outro item')).toBe('object');
  })

  // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
  it('Verifica se o array retornado pela função contém dois itens dentro.', () => {
    expect(productDetails('Alcool Gel', 'Máscara')[0]).not.toBe('Alcool Gel', 'Máscara' [0]);
  })
  
  // Teste se os dois productIds terminam com 123.
  it('Verifica se os dois productIds terminam com 123.', () => {
    expect(productDetails('Alcool gel', 'Máscara')[0].details.productId).toMatch('Alcool gel123');
    expect(productDetails('Alcool gel', 'Máscara')[1].details.productId).toMatch('Máscara123');
  })
});