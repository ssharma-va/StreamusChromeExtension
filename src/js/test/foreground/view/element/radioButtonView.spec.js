﻿define(function(require) {
  'use strict';

  var RadioButtonView = require('foreground/view/element/radioButtonView');
  var RadioButton = require('foreground/model/element/radioButton');
  var viewTestUtility = require('test/foreground/view/viewTestUtility');

  describe('RadioButtonView', function() {
    beforeEach(function() {
      this.documentFragment = document.createDocumentFragment();
      this.view = new RadioButtonView({
        model: new RadioButton()
      });
    });

    afterEach(function() {
      this.view.destroy();
    });

    viewTestUtility.ensureBasicAssumptions.call(this);
  });
});