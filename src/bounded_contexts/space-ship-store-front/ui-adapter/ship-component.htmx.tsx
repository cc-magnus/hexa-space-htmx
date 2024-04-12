import {monthlyRate, SpaceShip} from '../domain/space-ship';
import {FC} from "hono/jsx";

type ShipComponentHtmxProps = {
    ship: SpaceShip
}

export const ShipComponentHTMX: FC<ShipComponentHtmxProps> = ({ship}) => {
    return <>
        <div className="ship">
            <div>
                <img
                    src={`/public/images${ship.image}`}
                    height={256}
                    width={256}
                    alt={ship.name}
                />
                <p>{ship.name}</p>
            </div>

            <ul className="ship-data">
                <li><b>Location</b>: {ship.location}</li>
                {ship.mileage && <li><b>Mileage (ly)</b>: <span data-testid="ship-mileage"> {ship.mileage}</span></li>}
                <li><b>Speed</b>: {ship.speed} LY/sec</li>
                <li><b>Built</b>: {ship.constructionYear}</li>
                <li><b>Price</b>:
                    <span data-testid="ship-price"> {ship.price}</span>
                    <br/>
                </li>

                <li>
                    <br/>
                    <input
                        data-testid="number-of-rates"
                        type="range"
                        id="rates" name="rates"
                        min="2" max="24" value={0}
                    />
                    <br/>
                    <label htmlFor="rates">Pay in {0} Rates</label>

                </li>
                <li><b>Monthly Rate</b>:
                    <span data-testid="monthly-rate"> {monthlyRate(ship.price, 0).toFixed(2)}</span>
                </li>

                {/*<Clapper numberOfClaps={ship.claps?? 0} persistInc={() => persistClapInc(ship.id)}/>*/}
                {/*
        Example for a styled sales label!
      <li>
        <div className="sales-label"><span >Sale</span></div>
      </li>
      */}
            </ul>
        </div>
    </>
}
