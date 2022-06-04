import { ValidationError } from "../../../../config/error";
import { validateLine } from "./function/validate-bank";

export function bank(line: string) {
  if (line.length === 47 || line.length === 48) return validateLine(line);
  throw new ValidationError("Boleto inválido");
}
