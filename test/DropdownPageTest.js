require('./spec_helper')
const assert = require('assert')
const DropdownPage = require('../pages/DropdownPage')
const DriverFactory = require('../lib/DriverFactory')

describe('Dropdown @deep', () => {
	let dropdown
	beforeEach(async function () {
		dropdown = new DropdownPage(this.driver)
		await dropdown.loadDropdownPage()
	})

	it('Loads the dropdown', async () => {
		assert(await dropdown.findDropdown(), true)
	})

	it('Clicks on dropdown', async () => {
		await dropdown.selectDropdown()
		assert(await dropdown.isSelected(), true)
	})
})
