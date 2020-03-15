#!/usr/bin/env node

const path = require('path');
const { Nuxt, Builder } = require(path.resolve(process.cwd(), 'node_modules/nuxt'));

(async () => {
	try {
	    const config = require(path.resolve(process.cwd(), 'config/nuxt.js'));

	    const builder = new Builder(new Nuxt(config));

	    const templateContext = builder.createTemplateContext();

	    await builder.resolveStore(templateContext);
	    await builder.resolveCustomTemplates(templateContext);

	    templateContext.templateFiles = templateContext.templateFiles.filter(({ dst }) => dst === 'store.js');

	    await builder.compileTemplates(templateContext);
	} catch (e) {
		//
	}
})();