export function module10(campo: string) {
  const linha = campo.split("").reverse();
  const calc = linha.reduce((acc, current, index) => {
    let soma = Number(current) * (((index + 1) % 2) + 1);
    soma = soma > 9 ? Math.trunc(soma / 10) + (soma % 10) : soma;
    return acc + soma;
  }, 0);
  return Math.ceil(calc / 10) * 10 - calc;
}
