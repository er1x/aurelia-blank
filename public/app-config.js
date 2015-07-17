export function configure(aurelia) {
  aurelia.use.defaultBindingLanguage();
  aurelia.start().then(a => a.setRoot('./viewmodels/main', document.getElementById('application')));
}
