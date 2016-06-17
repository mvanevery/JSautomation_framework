module.exports = {
	routes: {
		baseUrl: 'https://madmobile-staging.payless.com/',
		legBaseUrl: 'http://whatsmyuseragent.com',
		prodBaseUrl: 'm.payless.com'
	},

	helpers: {
		pause: '15000',
		search: '142898',
		men: '//a[@href="/mens-shoes/"]',
		catWomenAcc: '//a[@href="/mens/boots/"]',
		storeAddress: '346 WESTSHORE PLAZA,SPACE A12,TAMPA, FL 33609-1814',
		username: 'mve.payless@gmail.com',
		password: 'Password1',
		firstName: 'mad',
		lastName: 'mobile',
		address1: '2701 North Rocky Point Dr',
		address2: 'Suite 500',
		city: 'Tampa',
		state: 'FL',
		zipcode: '33607',
		phone: '8134001976',
		email: 'mve.payless@gmail.com',
		ccName: 'Mad Mobile',
		ccNumber: '4100630020577750',
		ccExpMonth:'09',
		ccExpYear: '2018',
		ccSecurity: '171',
		shipTitle: 'SHIPPING',
		shipLabel: 'tampa-1',
		firstNameFake: 'Test',
		lastNameFake: 'Test',
		addressFake: '123 Main St',
		phoneFake: '8134002000',
		emailFake: 'test@madmobile.com',
		ccNameFake: 'Test Test',
		ccNumberFake: '4111111111111111',
		ccExpMonthFake:'01',
		ccExpYearFake: '2018',
		ccSecurityFake: '111',
		payNameFake: 'Test Test',
		payTypeFake: 'Visa',
		payNumberFake: '************1111',
		payExpiresFake: 'Exp. January 2018',
		orderError: 'Please verify your payment information and try again. (CS:481)',
		shipToStoreAddress: ['Pick Up Your Items at:',
			'346 WESTSHORE PLAZA',
			'SPACE A12',
			'TAMPA, FL 33609-1813',
			'813-287-1681'],
		shipInfoReal:['mad mobile',
			'2701 North Rocky Point Dr',
			'Suite 500',
			'Tampa, FL 33607',
			'813-400-1976',
			'mve.payless@gmail.com',
			'Rewards Member Recognized',
			'Shipping Method: Standard Delivery' ],
		billInfoSTS:['mad mobile',
			'2701 North Rocky Point Dr',
			'Suite 500',
			'Tampa, FL 33607',
			'813-400-1976',
			'mve.payless@gmail.com',
			'Rewards Member Recognized'],
		payInfo: ['Mad Mobile',
			'Visa',
			'************7750',
			'Exp. September 2018'],
		billInfoSTA: [ 'mad mobile',
			'2701 North Rocky Point Dr',
			'Suite 500',
			'Tampa, FL 33607',
			'813-400-1976' ],
		shipInfoFake: [ 'Ship to: Test Test',
			'123 Main St',
			'Tampa, FL 33607',
			'813-400-2000',
			'test@madmobile.com',
			'Shipping Method: Standard Delivery' ],
		billingInfoFake: [ 'Test Test',
			'123 Main St',
			'Tampa, FL 33607',
			'813-400-2000' ]
}
};