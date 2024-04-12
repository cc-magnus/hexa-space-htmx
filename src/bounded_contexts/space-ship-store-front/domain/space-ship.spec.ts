import {it, describe, expect} from "vitest";
import {monthlyRate, SpaceShip} from "./space-ship";

describe("SpaceShip.monthlyRate", () => {
    it("should calc the monthly Rate for 10 month with a 10% interest rate", () => {
        expect(monthlyRate(50_000, 10)).toBeCloseTo(5458.33, 2);
    });
});
