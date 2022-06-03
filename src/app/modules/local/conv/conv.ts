import { ValidationError } from "../../../../config/error";
import { validateLine } from "./function/validate-conv";

export async function conv(line: string, validarCampos = false) {
  if (line.length === 48) return validateLine(line, validarCampos);
  throw new ValidationError("Boleto Inválido");
}
