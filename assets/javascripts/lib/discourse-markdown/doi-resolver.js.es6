import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
  opts.features['doi-resolver'] = true;
});

function resolveDOI (text) {
  return text.replace(/(10.\d{4,9}\/[-._;()\/:A-Z0-9]+)/gi,
		      "<a href=\"https:\/\/doi.org/$1\">$1</a>");
}
function piratize (text) {
  return text.replace(/\b(am|are|is)\b/ig, "be")
             .replace(/ing\b/ig, "in'")
             .replace(/v/ig, "'");
}

export function setup(helper) {
  helper.addPreProcessor(resolveDOI);
}
