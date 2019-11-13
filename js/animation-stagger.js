var app = (function() {

  function initLinksAnimations() {
    $(document).ready(() => {
      var divs =Array.from(document.getElementsByClassName('stagger'));
      console.log(divs)
      divs.forEach((nodeEle, i) => {
        setTimeout(() => {
          $(nodeEle).addClass('slide-in-left');
        }, 500 * i);
      });
    });
  }

  let fn = {
    init: function() {
      initLinksAnimations();
    }
  };
  return fn;
})();
