var calculator = require('../calculator')

describe('As a math student', function() {
	describe('the string calculator', function() {
		beforeEach(function(){

		})

		it('should return 0 if there is no value', function() {
			var result = calculator.add('')
			expect(result).toBe(0);
		});

		it('should return 0 if the parameter is an empty string', function() {
			var result = calculator.add('')
			expect(result).toBe(0);
		});

		it('should return n if the parameter is a given n number', function() {
			var result = calculator.add('42')
			expect(result).toBe(42)
		})

		it('should return sum(a,b) if numbers "a,b" are given as parameter', function() {
			var result = calculator.add('42,21')
			expect(result).toBe(63)
		})

		it('should return sum(a,b,c,...) of any amount of numbers given', function() {
			var result = calculator.add('21,42,63,84')
			expect(result).toBe(210)
		})

		it('should also support \n as a delimiter e.g: 1,2\n3', function (){
			var result = calculator.add('21\n42,63')
			expect(result).toBe(126)

		})
	});
});