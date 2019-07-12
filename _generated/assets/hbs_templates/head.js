define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!-- views/partials/head.ejs -->\n<head>\n    <title>"
    + alias4(((helper = (helper = helpers.titelWebsite || (depth0 != null ? depth0.titelWebsite : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titelWebsite","hash":{},"data":data}) : helper)))
    + "</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <meta name=\"Description\" content=\""
    + alias4(((helper = (helper = helpers.siteDescription || (depth0 != null ? depth0.siteDescription : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"siteDescription","hash":{},"data":data}) : helper)))
    + "\">\n    <link rel=\"stylesheet\" href=\"/assets/css/main.css\">\n</head>";
},"useData":true}); });