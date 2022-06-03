import { module10 } from "../modules/modules";

export const bankToBarCode = async (line: string): Promise<string> => {
  let bankLine = "";
  bankLine += line.substring(0, 3);
  bankLine += line.substring(3, 4);
  bankLine += line.substring(32, 33);
  bankLine += line.substring(33, 37);
  bankLine += line.substring(37, 47);
  bankLine += line.substring(4, 9);
  bankLine += line.substring(10, 20);
  bankLine += line.substring(21, 31);
  return bankLine;
};

export async function validateLine(line: string, validarCampos = false) {
  const campo = [
    {
      num: line.substring(0, 9),
      DV: line.substring(9, 10),
    },
    {
      num: line.substring(10, 20),
      DV: line.substring(20, 21),
    },
    {
      num: line.substring(21, 31),
      DV: line.substring(31, 32),
    },
  ];

  const bankIsValid = validarCampos
    ? campo.every((e) => module10(e.num) === Number(e.DV))
    : true;
  const barCode = await bankToBarCode(line);
  const amount = await getValue(line);
  const expirationDate = await exDate(line);
  return {
    barCode,
    expirationDate,
    amount,
    bankIsValid,
  };
}

export const getValue = async (line: string): Promise<string> => {
  const val = await parseFloat(
    line.substring(line.length - 10, line.length)
  ).toString();
  if (val.length === 2) {
    return val + "0,";
  } else if (val.length === 1) {
    return val + "0,0";
  } else {
    const valFinal =
      val.substring(0, val.length - 2) +
      "," +
      val.substring(val.length - 2, val.length);
    return valFinal;
  }
};

export const exDate = async (line: string) => {
  const dias = parseInt(line.slice(33, 37));
  const data = new Date(1997, 10 - 1, 7);
  data.setDate(data.getDate() + dias);
  data.getDate();
  return data;
};
