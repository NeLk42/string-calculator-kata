exports.add = function(text){
	var numbers = getNums(text)
	var sum = getSum(numbers)
	return sum
};

getNums = function(text){
	var delimiter = /,|\n/g
	return text.split(delimiter)	
}

getSum = function(numbers){
	var sum = 0
	for (var i=0; i<numbers.length; i++){
		sum += parseInt(numbers[i])
	}
	return (sum || 0)
}