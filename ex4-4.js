//check first argument character is starting with the second argument

function startswith(str1,str2)
{
	if (str2==str1.slice(0,str2.length))
		return true;
	else 
		return false;
}

console.log(startswith('sanal','san'));
