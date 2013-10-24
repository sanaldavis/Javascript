//array program: input a number and get output as array from 0 to that number

var number_array=[];

function range(value)
{
	for(counter=0;counter<=value;counter++)
		number_array[counter]=counter;
	return number_array;
}

console.log(range(5));
