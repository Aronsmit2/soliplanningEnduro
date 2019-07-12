define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return "<form class=\"form-home\">\n    <button>Concert</button>\n    <button>Repetitie</button>\n  </form>\n  <div class=\"datum-wrapper\">\n    <div>\n      <h2 class=\"titel-concert\">"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.concerts : depth0)) != null ? stack1.concert_name : stack1), depth0))
    + "</h2>\n      <p class=\"datum-concert\">"
    + alias1(((helper = (helper = helpers.concert_date || (depth0 != null ? depth0.concert_date : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"concert_date","hash":{},"data":data}) : helper)))
    + "</p>\n    </div>\n    <div class=\"home-blokjes\">\n      <ul>\n        <li><label><input type=\"checkbox\"></label></li>\n        <li><label><input type=\"checkbox\"></label></li>\n        <li><label><input type=\"checkbox\"></label></li>\n      </ul>\n    </div>\n  </div>";
},"useData":true}); });