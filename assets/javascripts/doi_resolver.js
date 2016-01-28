function resolveDOI (text) { 
  return text.replace(/(doi):(10\..+)\b/ig, "$1:<a href=\"http://dx.doi.org/$2\">$2</a>");
}

Discourse.Dialect.postProcessText(function (text) {
  text = [].concat(text);
  for (var i = 0; i < text.length; i++) {
    if (text[i].length > 0 && text[i][0] !== "<") {
      text[i] = resolveDOI(text[i]);
    }
  }
  return text;
});

