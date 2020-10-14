const BasePage = require('./BasePage')

const PAGE_TEXT = { className: 'example' }
const CLOSE_LINK = { className: 'modal-footer' }
const POPUP_MODULE = { id: 'ouibounce-modal' }
const CONTENT = { id: 'content' }

class DisablePopup extends BasePage {
	constructor(driver) {
		super(driver)
	}

	async loadPage() {
		await this.visit('/exit_intent')
		await this.find(PAGE_TEXT)
	}

	// async openNew(url, windowName, windowFeatures) {
	// 	await this.openNewWindow(
	// 		'https://webdriver.io',
	// 		'WebdriverIO window',
	// 		'width=420,height=230,resizable,scrollbars=yes,status=1'
	// 	)
	// }

	async isPresent() {
		return this.isDisplayed(CONTENT)
	}

	async popupIsVisible() {
		return this.isDisplayed(POPUP_MODULE)
	}
}

module.exports = DisablePopup
