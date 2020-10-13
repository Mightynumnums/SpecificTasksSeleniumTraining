require('./spec_helper')
const assert = require('assert')
const DisablePopupPage = require('../pages/DisablePopupPage')
const DriverFactory = require('../lib/DriverFactory')

describe('Disable Popup', () => {
	let disablePopup
	beforeEach(async function () {
		disablePopup = new DisablePopupPage(this.driver)
	})

	it('navigates to the page', async () => {
		await disablePopup.loadPage()
		assert(await disablePopup.isPresent(), true, 'Page has loaded')
	})

	it('locates the popup', async () => {
		\
		//how do you locate a pop up outside of window view?

		const popup = await this.driver.switchTo().alert()
		await disablePopup.popupIsVisible()
		assert(await disablePopup.isVisible(), true)
		// const result = await this.driver
		// 	.findElementById('ouibounce-modal')
		// 	.getText()
		// assert(result === 'Close')
	})
})
