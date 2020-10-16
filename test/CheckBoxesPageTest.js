require('./spec_helper')
const assert = require('assert')
const CheckboxesPage = require('../pages/CheckBoxesPage')
const DriverFactory = require('../lib/DriverFactory')

describe('Checkboxes @deep', () => {
	let checkboxes
	beforeEach(async function () {
		checkboxes = new CheckboxesPage(this.driver)
		await checkboxes.loadCheckboxesPage()
	})

	xit('visits the page and finds the checkboxes', async () => {
		assert(await checkboxes.findCheckboxes(), true, 'Check Boxes not found')
	})

	it('Un-checks a box', async () => {
		await checkboxes.unCheckBox()
		assert(await checkboxes.isUnchecked(), true)
	})

	it('Checks a box', async () => {
		await checkboxes.checkBox()
		assert(await checkboxes.isUnchecked(), false)
	})
})
