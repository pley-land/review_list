const utils = require('./utils.js');

const coolCount = utils.generateCool;
test('generates a Cool count for a review', () => {
	expect(coolCount()).to.be.within(0, 4);
});
