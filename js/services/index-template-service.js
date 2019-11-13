const linkListOptions = {
  links: [
    {
      display: '',
      linkUrl: '',
      orderNumber: 0
    }
  ]
};
var indexTemplateService = (function() {
  let fn = {
    /**
     * 
     * @param {linkListOptions} options
     * @returns {string} htmlString
     */
    createLinkList: function(options) {
      var rendered = Mustache.render(linkButtonTemplate, options);
      return rendered;
    }
  };
  return fn;
})();
