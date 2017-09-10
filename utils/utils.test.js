const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(10, 45);
            expect(res).toBe(55).toBeA('number');
        });
        
        it('should add two numbers async', (done) => {
            utils.addAsync(12, 13, (res) => {
                expect(res).toBe(25).toBeA('number');
                done();   
            });    
        });
    });
    describe('#square', () => {
        it('should square a number', () => {
            var res = utils.square(8);
            expect(res).toBe(64).toBeA('number');
        });
        
        it('should square a number async', (done) => {
            utils.squareAsync(6, (res) => {
                expect(res).toBe(36).toBeA('number');
                done();   
            });    
        });
    });
    it('should conatain both firstname and lastname', () => {
        var user = {age: 25, location: 'Hyderabad'};
        var res = utils.setName(user, 'Anchal Gupta');
        expect(res).toInclude({firstName: 'Anchal', lastName: 'Gupta'});
    });
});