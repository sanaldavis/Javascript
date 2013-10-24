//pick date inside the paragraph and create a new date

function extrateDate(paragraph)
{
	date=paragraph.slice(5,15).split('/');
	console.log(date);
	return (new Date(date[2],date[1],date[0]));
}


console.log(extrateDate("died 27/04/2006: Black Leclère"));
