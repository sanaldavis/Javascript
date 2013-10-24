//date printed as DD/MM/YYYY

function formatDate(date)
{
	day=date.getDate();
	month=date.getMonth()+1;
	year=date.getFullYear();
	if (day.length!=2)
		day='0'+day
	if (month.length!=2)
		month='0'+month
	return(day+'/'+month+'/'+year);
}

console.log(formatDate(new Date(2000, 0, 1)));
