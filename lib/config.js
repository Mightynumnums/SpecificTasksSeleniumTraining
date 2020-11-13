module.exports = {
	baseUrl: process.env.BASE_URL || 'https://the-internet.herokuapp.com',
	baseUrl2: process.env.BASE_URL || 'https://www.google.com/',
	browser: process.env.BROWSER || 'chrome',
	host: process.env.HOST || 'saucelabs',
	sauce: {
		browserName: process.env.BROWSER_NAME || 'chrome',
		browserVersion: process.env.BROWSER_VERSION || '75.0',
		platformName: process.env.PLATFORM_NAME || 'Windows 10',
		'sauce:options': {
			username: process.env.SAUCE_USERNAME,
			accessKey: process.env.SAUCE_ACCESS_KEY,
		},
	},
	sauceW3C: {
		browserName: process.env.BROWSER_NAME || 'chrome',
		browserVersion: process.env.BROWSER_VERSION || '75.0',
		platformName: process.env.PLATFORM_NAME || 'Windows 10',
		'sauce:options': {
			username: process.env.SAUCE_USERNAME,
			accessKey: process.env.SAUCE_ACCESS_KEY,
			tunnelIdentifier: process.env.SAUCE_TUNNEL,
		},
	},
}
