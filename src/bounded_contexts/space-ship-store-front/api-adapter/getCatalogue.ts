import {ShipFromCatalogue} from './types';

export const END_POINT = "http://127.0.0.1:8080/api/catalogue";
export const getCatalogue = async (fetch_ = fetch) : Promise<ShipFromCatalogue[]> => {
  return await (await fetch_(END_POINT)).json();
};
