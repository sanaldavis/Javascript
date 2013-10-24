//make object and add values

var cat={"jimmy":true};

console.log(cat);

cat["tommy"]=true;

console.log("tommy" in cat);

console.log(cat);

delete cat["tommy"];

console.log(cat);
