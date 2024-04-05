import '@testing-library/jest-dom/extend-expect'
import {describe, expect, it, vi} from "vitest";
import {SpaceShip} from '../domain/space-ship';
import {ShipComponentHTMX} from './ship-component.htmx';
import {getByTestId, queryByTestId} from '@testing-library/dom';
import {render} from '../../../test-utils/render';
import {act, fireEvent} from '@testing-library/react';

const spaceShipWorth50000: SpaceShip = {
    id: "27",
    name: "XV-1 Turbo Alpha",
    price: 50_000,
    location: "Ganymed",
    image: "/ship1.jpg",
    mileage: 1000,
    speed: 500,
    constructionYear: 3451,
};

const spaceShip: SpaceShip = {
    id: "27",
    name: "XV-1 Turbo Alpha",
    price: 10000,
    location: "Ganymed",
    image: "/ship1.jpg",
    mileage: 1000,
    speed: 500,
    constructionYear: 3451,
};

describe('Ship', () => {
    it('renders price', async () => {

        const container = await render(<ShipComponentHTMX ship={spaceShipWorth50000}/>)

        expect(getByTestId(container, "ship-price")).toHaveTextContent("50000")
    });

    it('renders mileage', async () => {
        const ship: SpaceShip = {
            id: "27",
            name: "XV-1 Turbo Alpha",
            price: 50_000,
            location: "Ganymed",
            image: "/ship1.jpg",
            mileage: 3.7,
            speed: 500,
            constructionYear: 3451,
        };

        const container = await render(<ShipComponentHTMX ship={ship}/>);
        expect(getByTestId(container, "ship-mileage")).toHaveTextContent("3.7")
    });

    it('renders no mileage for ships that do not have mileage', async () => {
        const shipWithoutMillage: SpaceShip = {
            id: "27",
            name: "XV-1 Turbo Alpha",
            price: 50_000,
            location: "Ganymed",
            image: "/ship1.jpg",
            speed: 500,
            constructionYear: 3451,
        };

        const container = await render(<ShipComponentHTMX ship={shipWithoutMillage}/>);
        expect(queryByTestId(container, "ship-mileage")).not.toBeInTheDocument()
    });
});


describe('Monthly Rates', () => {
    it.fails('defaults to 12', async () => {
        const container = await render(<ShipComponentHTMX ship={spaceShip}/>);
        expect(queryByTestId(container, "number-of-rates")).toHaveValue("12")
    });

    it('can be changed', async () => {
        const container = await render(<ShipComponentHTMX ship={spaceShip}/>);
        const rateSlider = getByTestId(container, "number-of-rates")
        fireEvent.change(rateSlider, {target: {value: 8}});
        expect(rateSlider).toHaveValue("8")
    });

    it.fails('adapts the Monthly Rate to Pay on changing the number of rates', async () => {
        const container = await render(<ShipComponentHTMX ship={spaceShipWorth50000}/>);
        const rateSlider = getByTestId(container, "number-of-rates")

        const oldRate = Number(getByTestId(container, "monthly-rate").innerHTML)
        await act(() => fireEvent.change(rateSlider, {target: {value: 2}}));
        const newRate = Number(getByTestId(container, "monthly-rate").innerHTML)

        expect(newRate).toBeGreaterThan(oldRate)
    });


});
