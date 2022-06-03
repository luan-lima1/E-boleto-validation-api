import { module10, module11 } from "../modules/modules";

export async function convBarCode(line: string) {
  let barCode = "";
  for (let index = 0; index < 4; index++) {
    const start = 11 * index + index;
    const end = 11 * (index + 1) + index;
    barCode += line.substring(start, end);
  }
  return barCode;
}

export async function validateLine(line: string, validarCampos = false) {
  const lineValue = Number(line[2]);
  let module: (campo: string) => number;
  if (lineValue === 6 || lineValue === 7) module = module10;
  else if (lineValue === 8 || lineValue === 9) module = module11;
  else return false;
  const campos = Array.from({ length: 4 }, (v, index) => {
    const start = 11 * index + index;
    const end = 11 * (index + 1) + index;
    return {
      num: line.substring(start, end),
      DV: line.substring(end, end + 1),
    };
  });
  const lineIsValid = campos.every((e) => module(e.num) === Number(e.DV));
  const lineToBarCode = await convBarCode(line);
  const amount = await getValue(line);
  return {
    barCode: lineToBarCode,
    amount,
    lineIsValid,
  };
}

export const getValue = async (line: string): Promise<string> => {
  const val = parseFloat(line.substring(16, 5)).toString();
  if (val.length === 2) {
    return val + "0,";
  } else if (val.length === 1) {
    return val + "0,0";
  } else {
    const valueFinal =
      val.substring(1, val.length - 2) +
      "," +
      val.substring(val.length - 2, val.length);
    return valueFinal;
  }
};
