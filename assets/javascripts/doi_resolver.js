function resolveDOI (text) { 
  return text.replace(/(10.\d{4,9}\/[-._;()\/:A-Z0-9]+)/gi, 
		      "<a href=\"https:\/\/doi.org/$1\">$1</a>");
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

