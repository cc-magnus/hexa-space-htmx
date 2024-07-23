import {test, expect} from '@playwright/test';

test.describe("Ship", () => {
    test("renders price", async ({page}) => {
        await page.goto('http://localhost:3000/ships')

        await expect(page.getByTestId('ship-price').first()).toContainText("5000")
    })

    test.skip("renders mileage", async ({page}) => {
        await page.goto('http://localhost:3000/ships')

        await expect(page.getByTestId("ship-mileage").first()).toContainText("3.7")
    })

    //should we test things that aren't here
    test.skip('renders no mileage for ships that do not have mileage', async ({page}) => {
        await page.goto('http://localhost:3000/ships')

        await expect(page.getByTestId("ship-mileage")).not.toBeVisible()
    })
})

test.describe("Monthly Rates", () => {
    test("defaults to 12", async ({page}) => {
        await page.goto('http://localhost:3000/ships')

        await expect(page.getByTestId("number-of-rates").first()).toContainText("12")
    })

    test("can be changed", async ({page}) => {
        await page.goto('http://localhost:3000/ships')

        await page.$eval('//*[@id="rates"]', (e, value) => {
            // @ts-ignore
            e.value = value;
            e.dispatchEvent(new Event('input', {'bubbles': true}));
            e.dispatchEvent(new Event('change', {'bubbles': true}));
        }, 2);

        await expect(page.getByTestId("number-of-rates").first()).toContainText("2")
    })

    test("adapts the Monthly Rate to Pay on changing the number of rates", async ({page}) => {
        await page.goto('http://localhost:3000/ships')

        const oldRate = Number(await page.getByTestId("monthly-rate").first().innerHTML())

        await page.$eval('//*[@id="rates"]', (e, value) => {
            // @ts-ignore
            e.value = value;
            e.dispatchEvent(new Event('input', {'bubbles': true}));
            e.dispatchEvent(new Event('change', {'bubbles': true}));
        }, 2);

        const newRate = Number(await page.getByTestId("monthly-rate").first().innerHTML())

        expect(newRate).toBeGreaterThan(oldRate)
    })
})
