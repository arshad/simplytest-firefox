// Import the page-mod API
var pageMod = require("sdk/page-mod");

// Import the self API
var self = require("sdk/self");

pageMod.PageMod({
  include: ["https://drupal.org/project/*", "http://drupal.org/project/*"],
  contentScriptFile: [self.data.url("jquery.min.js"), self.data.url("script.js")],
  contentStyleFile: self.data.url("style.css")
});
