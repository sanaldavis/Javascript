//input: paragraph as argument and return array of names

function catnames(paragraph)
{
	names=paragraph.slice(paragraph.indexOf(':')+2,paragraph.length);
	return names.split(',');
}

console.log(catnames("born 20/09/2004 (mother Yellow Bess): "+"Doctor Hobbles the 2nd, Noog"));
