export type SpaceShip = {
  id: string;
  name: string;
  price: number;
  location: string;
  image: string;
  mileage?: MileageInLightYears;
  speed?: number;
  constructionYear: number;
  claps?: number;
};

export type MileageInLightYears = number;

const INTEREST_RATE = 1.1;
export const DEFAULT_NUM_OF_MONTH = 12;

export const monthlyRate = (price: number, durationInMonth: number): number => {
  console.log("monthlyRate function", { price, durationInMonth });
  return (price / durationInMonth) * (1 + INTEREST_RATE / 12);
};
