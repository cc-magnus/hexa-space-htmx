import {SpaceShip} from "../domain/space-ship";
import {Claps} from "./claps";
import {ShipWithClaps} from '../domain/ShipWithClaps';

export const attachClapsToShips = ({claps, ships}: { claps: Claps, ships: SpaceShip[] }): ShipWithClaps[] => {
    // console.log("claps: ", claps);

    return ships.map((ship) => (
        {...ship, claps: claps[ship.id] ?? 0}
    ))
}
