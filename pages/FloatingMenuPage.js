const BasePage = require('./BasePage')
const Until = require('selenium-webdriver').until

const MENU = { id: 'menu' }
const HOME = { css: '#menu > ul > li:nth-child(1) > a' }

class FloatingMenuPage extends BasePage {
	constructor(driver) {
		super(driver)
	}

	async loadMenuItems() {
		await this.visit(`/floating_menu`)
		await this.isDisplayed(MENU, 30000)
	}

	async findMenu() {
		await this.find(MENU)
	}

	async selectMenuItem() {
		return this.click(HOME)
	}

	async checkUrl(linkText) {
		let current = await this.driver.getCurrentUrl()
	}
}

module.exports = FloatingMenuPage
