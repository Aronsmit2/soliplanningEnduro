define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<form class=\"form-home\">\n    <button>Concert</button>\n    <button>Repetitie</button>\n  </form>\n  <div class=\"datum-wrapper\">\n    <div>\n      <h2 class=\"titel-concert\">"
    + alias4(((helper = (helper = helpers.concert_name || (depth0 != null ? depth0.concert_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"concert_name","hash":{},"data":data}) : helper)))
    + "</h2>\n      <p class=\"datum-concert\">"
    + alias4(((helper = (helper = helpers.concert_date || (depth0 != null ? depth0.concert_date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"concert_date","hash":{},"data":data}) : helper)))
    + "</p>\n    </div>\n    <div class=\"home-blokjes\">\n      <ul>\n        <li><label><input type=\"checkbox\"></label></li>\n        <li><label><input type=\"checkbox\"></label></li>\n        <li><label><input type=\"checkbox\"></label></li>\n      </ul>\n    </div>\n  </div>";
},"useData":true}); });