const chinese2digit = require('../lib/chinese2digit');
const chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

describe('salary parse', () => {
    it('should be 40000', () => {
        var number = chinese2digit('四萬');
        number.should.be.equal(40000);
    })

    it('should be 505813', () => {
        var number = chinese2digit('五十萬五千八百一十三');
        number.should.be.equal(505813);
    })

    it('should be 6835605481', () => {
        var number = chinese2digit('六十八億三千五百六十萬五千四百八十一');
        number.should.be.equal(6835605481);
    })
});