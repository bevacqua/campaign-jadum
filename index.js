'use strict';

var jadum = require('jadum');
var path = require('path');
var rjs = /\.js$/i;

function read (file, done) {
  if (!rjs.test(file)) {
    file += '.js';
  }

  function next () {
    done(null, require(file));
  }
}

module.exports = {
  defaultLayout: path.join(__dirname, 'layout.js'),
  render: function (file, model, done) {
    done(null, require(file)(model));
  },
  renderString: function (template, model, done) {
    done(null, jadum.render(template, model));
  }
};
