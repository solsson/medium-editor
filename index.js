
var MediumEditor = require('./dist/js/medium-editor.js');

module.exports = MediumEditor;

if (typeof window !== 'undefined') {
  window.MediumEditor = module.exports;
}
