import { Claps } from "../clap-adapter/claps";
import { ShipInYard } from "./types";

export const END_POINT = "http://127.0.0.1:8080/api/claps";

export const getClaps = async (fetch_ = fetch): Promise<Claps> => {
  return await (await fetch_(END_POINT)).json();
};
