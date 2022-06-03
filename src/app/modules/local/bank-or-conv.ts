import { conv } from "./conv/conv";
import { bank } from "./bank/bank";

export async function bankOrConv(line: string) {
  if (line.length === 47) {
    return bank(line);
  } else if (line.length === 48) return await conv(line);
}
