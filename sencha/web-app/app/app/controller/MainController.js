Ext.define('senchaBdd.controller.MainController', {
	extend: 'Ext.app.Controller',
	requires: [
		'senchaBdd.view.PersonView'
	],
	config: {
		refs: {
			personsView: 'persons'
		},

		control: {
			personsView: {
				activate: 'onActivateView'
			}
		}

	},

	onActivateView: function() {
		console.log("Persons View Activated!");
	}
});