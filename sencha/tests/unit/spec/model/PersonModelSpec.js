Ext.require(['senchaBdd.view.PersonView', 'senchaBdd.model.PersonModel']);

describe('senchaBdd.view.PersonView', function () {
  it("has the at least two persons", function () {
    var view = Ext.create('senchaBdd.view.PersonView', {
      renderTo: 'jasmine_content',
      store:    {
        model: 'senchaBdd.model.PersonModel',
        data:   [
          {firstName: 'John', lastName: 'Doe'},
          {firstName: 'Michael', lastName: 'Williams'},
          {firstName: 'Charles', lastName: 'Smith'}
        ]
      }
    });
    //TODO: Identify the view
    expect(Ext.DomQuery.select('.personItem').map(function (el) {
      return el.textContent;
    }).join(', ')).toEqual('');

  });
});