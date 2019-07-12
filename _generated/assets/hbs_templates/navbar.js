define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<a class=\"header clearfix\">\n    <nav class=\"mobile-nav\">\n        <ul>\n            <li><a href=\"/\"><img src=\""
    + container.escapeExpression(((helper = (helper = helpers.logo || (depth0 != null ? depth0.logo : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"logo","hash":{},"data":data}) : helper)))
    + "\" alt=\"Home\"></a></li>\n            <li><a href=\"/login\"><img src=\"images/profile_1x.png\" alt=\"Login\"></a></li>\n            <li><a href=\"/\"><img src=\"images/cal_1x.png\" alt=\"Data\"></a></li>\n            <li><a href=\"/\"><img src=\"images/list_1x.png\" alt=\"Overzicht\"></a></li>\n            <li><a href=\"/\"><img src=\"images/info_1x.png\" alt=\"About\"></a></li>\n        </ul>\n    </nav>\n</a>";
},"useData":true}); });