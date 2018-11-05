import Dat from '../index';

const dat = new Dat();

dat.addSettings([{
  type: 'folder',
  id: 'myFolder',
  open: true,
  name: 'My Folder',
  variables: [{
    type: 'boolean',
    id: 'myBoolean',
    variable: 'myBoolean',
    name: 'My Boolean',
    initial: true,
    onChange(value) {
      console.log(`myBoolean: ${ value }`);
    }
  }, {
    type: 'number',
    id: 'myNumber',
    variable: 'myNumber',
    min: 0,
    max: 10,
    step: 1,
    name: 'My Number',
    initial: 5,
    onChange(value) {
      console.log(`myNumber: ${ value }`);
    }
  }, {
    type: 'dropdown',
    id: 'myDropdown',
    variable: 'myDropdown',
    initial: 'foo',
    options: [ 'foo', 'bar', 'baz' ],
    onChange(value) {
      console.log(`myDropdown: ${ value }`);
    } 
  }, {
      type: 'function',
      id: 'myFunction',
      name: 'My Function',
      function() {
        console.log('myFunction');
      }
  }]
}]);

// https://github.com/dataarts/dat.gui/blob/master/src/dat/controllers/Controller.js
const myBooleanController = dat.getController('myBoolean');

dat.setControllerValue('myBoolean', false);

// https://github.com/dataarts/dat.gui/blob/master/src/dat/gui/GUI.js
const myFolder = dat.getFolder('myFolder');