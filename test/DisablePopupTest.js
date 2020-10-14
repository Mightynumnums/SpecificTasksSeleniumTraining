require('./spec_helper')
const assert = require('assert')
const DisablePopupPage = require('../pages/DisablePopupPage')
const DriverFactory = require('../lib/DriverFactory')

describe('Disable Popup', () => {
	let disablePopup
	beforeEach(async function () {
		disablePopup = new DisablePopupPage(this.driver)
		await disablePopup.loadPage()
	})

	it('navigates to the page', async () => {
		assert(await disablePopup.isPresent(), true, 'Page has loaded')
	})

	// xit('opens another window', async () => {
	// 	await disablePopup.openNew()
	// 	assert(
	// 		await this.driver.browser.getTitle.to.be(
	// 			'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js'
	// 		)
	// 	)
	// })
})
