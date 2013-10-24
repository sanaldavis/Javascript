//find sum(range(1,10))

var number_array=[];

function range(start,value)
{
        for(counter=0;start<=value;counter++,start++)
                number_array[counter]=start;
        return number_array;
}

function sum(numbers)
{
	var total=0;
	for(start=numbers[0];start<=numbers.length;start++)
		total+=start;
	return total;
}

console.log(sum(range(1,10)));

