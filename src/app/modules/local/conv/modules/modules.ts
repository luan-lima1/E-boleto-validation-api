export function module10(campo: string) {
  const linha = campo.split("").reverse();
  const calc = linha.reduce((acc, current, index) => {
    let soma = Number(current) * (((index + 1) % 2) + 1);
    soma = soma > 9 ? Math.trunc(soma / 10) + (soma % 10) : soma;
    return acc + soma;
  }, 0);
  return Math.ceil(calc / 10) * 10 - calc;
}

export function module11(campo: string) {
  const linha = campo.split("").reverse();
  let calc = 2;
  const soma = linha.reduce((acc, current) => {
    const soma = Number(current) * calc;
    calc = calc === 9 ? 2 : calc + 1;
    return acc + soma;
  }, 0);
  const rDivisao = soma % 11;

  if (rDivisao === 0 || rDivisao === 1) {
    return 0;
  }
  if (rDivisao === 10) {
    return 1;
  }
  const DV = 11 - rDivisao;
  return DV;
}
