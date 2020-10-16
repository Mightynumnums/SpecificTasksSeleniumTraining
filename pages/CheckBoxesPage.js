const BasePage = require('./BasePage')

const H3 = { className: 'example' }
const CHECKBOXES = { id: 'checkboxes' }
const CHECKED = { css: '[type="checkbox"]' }

class CheckboxesPage extends BasePage {
	constructor(driver) {
		super(driver)
	}

	async loadCheckboxesPage() {
		await this.visit('/checkboxes')
		await this.find(H3)
	}

	async findCheckboxes() {
		return this.isDisplayed(CHECKBOXES)
	}

	async unCheckBox() {
		await this.find(CHECKED)
		if (CHECKED.checked === 'checked') {
			await this.click(CHECKED)
		}
	}

	async checkBox() {
		await this.find(CHECKED)
		if (!CHECKED.checked) {
			await this.click(CHECKED)
		}
	}

	async isUnchecked() {
		if (!CHECKED.checked !== 'checked') {
			return true
		} else {
			return false
		}
	}
}

module.exports = CheckboxesPage
