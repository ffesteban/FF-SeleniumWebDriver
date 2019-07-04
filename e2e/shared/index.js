import { until } from 'selenium-webdriver'
import { driver, defaultTimeout } from '../helpers'

export const root = () => driver.findElement({ className: 'site-content' })

export const load = async () => {
  await driver.get(`${process.env.BASE_URL}/`)
  await driver.wait(until.elementLocated(root), defaultTimeout)
};
