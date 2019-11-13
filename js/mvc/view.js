var viewIndex = (function() {
  let fn = {
    createLinkList: function(contentfulData) {
      var options = dataService.createOptionsFromCMS(contentfulData);
      console.log(options)
      htmlString = indexTemplateService.createLinkList(options);
      console.log(htmlString);
      $('#link-container').append(htmlString);
    }
  };
  return fn;
})();
