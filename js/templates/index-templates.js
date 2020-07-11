var linkButtonTemplate = `
<div class="link-list d-flex flex-column w-100 ">
{{#links}}
<a
  name="tree-link"
  style="transform:translateX(-1000px);"
  class="stagger btn btn-primary py-3 my-2"
  target="_blank"
  href="{{linkUrl}}"
  >{{display}}</a
>
{{/links}}
</div>
`;
var copyrightTemplate = `
<div class="w-100 small py-2" style="text-align:center;">​&copy; Copyright {{currentYear}}, <a href="https://www.kittyofangels.org/">Kitty Of Angels</a>. All rights reserved.</div>
`;
