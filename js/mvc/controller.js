var controllerIndex = (function() {
  function intitView() {
    contenfulApiService.getLinks().then(data => {
      viewIndex.createLinkList(data.items);
      app.init();
    });
    viewIndex.createCopyright();
  }
  let fn = {
    intit: function() {
      intitView();
    }
  };
  return fn;
})();
controllerIndex.intit();
