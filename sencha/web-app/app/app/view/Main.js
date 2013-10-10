Ext.define('senchaBdd.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'main',
    requires: [
        'senchaBdd.view.PersonView'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                xtype: 'persons',
                title: 'Sample Tests'
            }
        ]
    }
});
