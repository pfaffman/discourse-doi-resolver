import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
  opts.features['doi-resolver'] = true;
});

function resolveDOI (text) {
  return text.replace(/([^\/])(10.\d{4,9}\/[-._;()\/:A-Z0-9]+)/gi,
		      "$1<a href=\"https:\/\/doi.org/$2\">$2</a>");
}

export function setup(helper) {
  helper.addPreProcessor(resolveDOI);
}
