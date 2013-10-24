//give 1 string and 2 patten. find the substring which is inside that pattern 

function between(paragraph,str1,str2)
{
	start=paragraph.indexOf('[')+str1.length;
	console.log(start);
	end=paragraph.indexOf(']',start);
	console.log(end);
	return paragraph.slice(start,end);

}

console.log(between("bu ] boo [ bah ] gzz", "[ ", " ]"));
