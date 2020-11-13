const config = require('../lib/config')
const Until = require('selenium-webdriver').until
const By = require('selenium-webdriver').By

class BasePage {
	constructor(driver) {
		this.driver = driver
	}

	async visit(url) {
		if (url.startsWith('http')) {
			await this.driver.get(url)
		} else {
			await this.driver.get(config.baseUrl + url)
		}
	}

	// this method is to test autocomplete on google
	async visitUrl2() {
		await this.driver.get(config.baseUrl2)
	}

	find(locator) {
		return this.driver.findElement(locator)
	}

	async click(locator) {
		await this.find(locator).click()
	}

	async type(locator, inputText) {
		await this.find(locator).sendKeys(inputText)
	}

	// async openNewWindow(url, windowName, windowFeatures) {
	// 	await this.driver.browser.newWindow(url, windowName, windowFeatures)
	// 	console.log(this.diver.browser.getTitle())
	// }

	async isDisplayed(locator, timeout) {
		if (timeout) {
			await this.driver.wait(Until.elementLocated(locator), timeout)
			await this.driver.wait(
				Until.elementIsVisible(this.find(locator)),
				timeout
			)
			return true
		} else {
			try {
				return await this.find(locator).isDisplayed()
			} catch (error) {
				return false
			}
		}
	}
}

module.exports = BasePage
