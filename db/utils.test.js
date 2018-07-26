const utils = require('./utils.js');

const { generateCool } = utils;
test('generates a Cool count for a review', () => {
	expect(generateCool()).to.be.within(0, 4);
});
