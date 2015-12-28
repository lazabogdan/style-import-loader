var expect = require('expect.js');

describe('less-import-loader', function() {

    it('import dependency', function() {
        var result1 = require('raw-loader!../!./cases/a.less');
        expect(result1).to.contain('@import "../less/base";');

        var result2 = require('raw-loader!../!./cases/b/b.less');
        expect(result2).to.contain('@import "../../less/base";');

        var multiConfig = require('raw-loader!../?config=anotherConfig!./cases/a.less');
        expect(multiConfig).to.contain('@import "../less/base-another";');

        var append = require('raw-loader!../?config=insertAppend!./cases/a.less');
        expect(append).to.be('a {\n\tcolor: white;\n}\n\n@import "../less/base-another";');
    });

    it('multiple loader configs', function() {
        var multiConfig = require('raw-loader!../?config=anotherConfig!./cases/a.less');
        expect(multiConfig).to.contain('@import "../less/base-another";');
    });

    it('append', function() {
        var append = require('raw-loader!../?config=insertAppend!./cases/a.less');
        expect(append).to.be('a {\n\tcolor: white;\n}\n\n@import "../less/base-another";');
    });

});
