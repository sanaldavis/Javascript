//find base exponent values

var result=1;
function base_exponent(base,exponent)
{
	if(exponent==0)
		return 1;
	else
		return(base*base_exponent(base,exponent-1));
		
}

console.log(base_exponent(3,4));
