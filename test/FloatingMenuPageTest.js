require('./spec_helper')
const assert = require('assert')
const FloatingMenuPage = require('../pages/FloatingMenuPage')
const DriverFactory = require('../lib/DriverFactory')

describe('Floating Menu @deep', () => {
	let floatingMenu
	beforeEach(async function () {
		floatingMenu = new FloatingMenuPage(this.driver)
		await floatingMenu.loadMenuItems()
	})

	it('Load the page with the menu', async () => {
		let menu = await floatingMenu.findMenu()
		assert(floatingMenu.isDisplayed(menu), true)
	})

	it('Clicks on menu item', async () => {
		let url = await floatingMenu.selectMenuItem()

		let result = await floatingMenu.checkUrl('#home')
		assert(result === url)
	})
})
