var viewIndex = (function() {
  let fn = {
    createLinkList: function(contentfulData) {
      var options = dataService.createOptionsFromCMS(contentfulData);
      console.log(options)
      htmlString = indexTemplateService.createLinkList(options);
      console.log(htmlString);
      $('#link-container').append(htmlString);
    },
    createCopyright:function(){
      htmlString = indexTemplateService.createCopyright();
      console.log(htmlString);
      $('#copyright').append(htmlString);
      
    }
  };
  return fn;
})();
