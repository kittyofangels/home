var contenfulApiService = (function() {
  let fn = {
    /**
     * @returns {Promise}
     */
    getLinks: function() {
      return client.getEntries({ content_type: 'treeLink' });
    }
  };
  return fn;
})();
