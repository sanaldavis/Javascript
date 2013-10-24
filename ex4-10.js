//array program: input a number and get output as array from 0 to that number or range from start to end

function range(start,end)
{
	var number_array=[];	
	if(arguments.length==2)
	{
		for(counter=0;start<=end;start++,counter++)
                        number_array[counter]=start;
                return number_array;
	}
	else
	{
		for(counter=0;counter<=start;counter++)
                        number_array[counter]=counter;
                return number_array;
	}
}

console.log(range(5));
console.log(range(2,5));
