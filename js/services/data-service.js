var dataService = (function() {
  let fn = {
    /**
     *
     * @param {Array} contentfulData
     * @returns {linkListOptions}
     */
    createOptionsFromCMS: function(contentfulData) {
      var options = { links: [] };
      contentfulData.forEach(entry => {
        options.links.push({
          display: entry.fields.buttonsDisplayText,
          linkUrl: entry.fields.linkUrl,
          orderNumber: entry.fields.orderNumber
        });
      });
      return options;
    }
  };
  return fn;
})();
