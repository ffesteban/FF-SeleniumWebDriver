import { until } from 'selenium-webdriver';
import { load } from '../shared/index';
import { driver } from '../helpers';
import homeElements from '../elements/home'

describe('Home', () => {
  beforeEach(async () => {
    await load()
  })
  it('should request information for a pokemon', async () => {
    const pokemon = "pikachu"
    const { inputLocator, input, submitBtn } = homeElements
    await driver.wait(until.elementLocated(inputLocator()), 20000)
    await input().clear()
    await input().sendKeys(`pokemon/${pokemon}`)
    await submitBtn().click()
    await driver.sleep(3000)
  })
})
