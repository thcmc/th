'use strict';

module.exports = {
	db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://tmh144429:F1la50won@dbh56.mongolab.com:27567/th',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.min.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.min.css',
				'public/modules/core/css/bootstrap.css',
				'public/modules/core/css/th.css',
				'//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css',
				'https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300',
				'https://fonts.googleapis.com/css?family=Megrim',
				'https://fonts.googleapis.com/css?family=Rosarivo',
				'https://fonts.googleapis.com/css?family=Montserrat'
			],
			js: [
				'public/lib/angular/angular.min.js',
				'public/lib/angular-resource/angular-resource.min.js',
				'public/lib/angular-animate/angular-animate.min.js',
				'public/lib/angular-ui-router/release/angular-ui-router.min.js',
				'public/lib/angular-ui-utils/ui-utils.min.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js'
			]
		},
		css: 'public/dist/application.min.css',
		js: 'public/dist/application.min.js'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '232229536969930',
		clientSecret: process.env.FACEBOOK_SECRET || '155524a8e8b04e6d45829a8ecfc5682a',
		callbackURL: 'http://www.timheneroty.com/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'dxQ3qJNDCEXbKq9lZL78h9eg0',
		clientSecret: process.env.TWITTER_SECRET || 'oncPykt8mrS9fYtnqBrD9iEDC5oGKg3AXV4Y7YHiE2ty0Ej4zv',
		callbackURL: 'http://www.timheneroty.com/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || 'APP_ID',
		clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/linkedin/callback'
	}
};
