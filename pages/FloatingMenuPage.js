const BasePage = require('./BasePage')

const MENU = { id: 'menu' }

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
}

module.exports = FloatingMenuPage
