require('./spec_helper')
const assert = require('assert')
const DriverFactory = require('../lib/DriverFactory')
const AutocompletePage = require('../pages/AutocompletePage')

describe('Autocomplete Google @deep', () => {
	let autocomplete
	beforeEach(async function () {
		autocomplete = new AutocompletePage(this.driver)
		await autocomplete.loadGoogleSearchPage()
	})

	it('visits google', async () => {
		assert(await autocomplete.loadedPage(), true, 'Page has not loaded')
	})

	it('Auto completes typing Sauce Labs into search bar', async () => {
		let result = await autocomplete.typeIntoSearch()
	})
})
