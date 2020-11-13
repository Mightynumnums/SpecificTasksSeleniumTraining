const BasePage = require('./BasePage')

const GOOGLESEARCH = { className: 'a4bIc' }
const INPUT = { css: '[type="text"]' }
const FOUNDINPUT = { className: 'sbl1' }
const LINK = { className: 'yuRUbf' }

class AutocompletePage extends BasePage {
	constructor(driver) {
		super(driver)
	}

	async loadGoogleSearchPage() {
		await this.visitUrl2()
	}

	async loadedPage() {
		return this.isDisplayed(GOOGLESEARCH)
	}

	async typeIntoSearch() {
		await this.type(INPUT, 'sauce l')
		await this.click(FOUNDINPUT)
		let resultsPage = this.find(LINK).click()
	}
}

module.exports = AutocompletePage
