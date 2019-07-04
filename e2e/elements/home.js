import { By } from 'selenium-webdriver'
import { driver } from '../helpers'

const home = {
  inputLocator: () => By.id("url-input"),
  input: () => driver.findElement({ id: "url-input" }),
  submitBtn: () => driver.findElement({ className: "Input-module--button--O5LT8" })
}

export default home
