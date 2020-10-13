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
		await disablePopup.findPopup(300, 300)
		assert(await disablePopup.popupIsVisible(), true, 'Popup is visible')
	})
})
