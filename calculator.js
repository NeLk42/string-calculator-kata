exports.add = function(text){
	var numbers = getNums(text)
	var sum = getSum(numbers)
	return sum
};

getNums = function(text){
	return text.split(',')	
}

getSum = function(numbers){
	var sum = 0
	for (var i=0; i<numbers.length; i++){
		sum += parseInt(numbers[i])
	}
	return (sum || 0)
}