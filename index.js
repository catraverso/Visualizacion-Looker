looker.plugins.visualizations.add({
  create: function(element, config) {
    element.innerHTML = "<h1>¡Hola Looker!</h1>";
  },
  updateAsync: function(data, element, config, queryResponse, details, done) {
    done();
  }
});
