import {ShipInYard} from './types';

export const END_POINT = "http://127.0.0.1:8080/api/inYard";

export const getInYard = async (fetch_ = fetch) : Promise<ShipInYard[]> => {
  return await (await fetch_(END_POINT)).json();
};
