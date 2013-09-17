Ext.define('senchaBdd.view.PersonView', {
	extend: 'Ext.List',
	requires: ['senchaBdd.store.PersonsStore'],
	xtype: 'persons',
	alias: 'widget.persons',
	config: {
        title: 'Sample Persons',
        grouped: false,
        itemTpl: '<div class="personItem">{firstName}, {lastName}</div>',
        store: 'PersonsStore',
        onItemDisclosure: true
    }
});