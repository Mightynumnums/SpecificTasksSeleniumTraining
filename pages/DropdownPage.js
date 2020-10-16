const BasePage = require('./BasePage')

const CONTENT = { id: 'content' }
const DROPDOWN_PAGE = { className: 'example' }
const DROPDOWN = { id: 'dropdown' }
const OPTION_1 = { css: '[value="1"]' }
const SELECTED = { css: '[selected="selected"]' }

class DropdownPage extends BasePage {
	constructor(driver) {
		super(driver)
	}

	async loadDropdownPage() {
		await this.visit('/dropdown')
		await this.find(DROPDOWN_PAGE)
	}

	async findDropdown() {
		return this.isDisplayed(DROPDOWN)
	}

	async clickDropdown() {
		return this.click(DROPDOWN)
	}

	async selectDropdown() {
		return this.click(OPTION_1)
	}

	async isSelected() {
		return this.isDisplayed(SELECTED)
	}
}

module.exports = DropdownPage
