var calculator = require('../calculator')

describe('As a math student', function() {
	describe('when I use the string calculator', function() {

		beforeEach(function(){

		})

		it('should return 0 for an empty string', function() {
			var result = calculator.add('')
			expect(result).toBe(0);
		});

		it('should return n for a given n number', function() {
			var result = calculator.add('1')
			expect(result).toBe(1)
		})
	});
});

/* 1) Create a simple String calculator with a method int Add(string numbers)

	The method can take 0, 1 or 2 numbers, and will return their sum (for an empty string it will return 0) for example “” or “1” or “1,2”

	Start with the simplest test case of an empty string and move to 1 and two numbers

	Remember to solve things as simply as possible so that you force yourself to write tests you did not think about

	Remember to refactor after each passing test 
*/