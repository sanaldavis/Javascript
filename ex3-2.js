//find greater of two numbers. use one argument

function GreaterThan(num1)
{
	function check(num2)
	{
		return num1>num2;
	}
	return check;
}

Greater=GreaterThan(24);
console.log(Greater(80));
