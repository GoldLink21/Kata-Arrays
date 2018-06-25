const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";    
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

function text(title,text){
    var p = document.createElement('p');
    p.innerHTML = '<strong>'+title+'</strong><br>'+text;
    document.body.appendChild(p);
}

text('GOT Cities',JSON.stringify(gotCitiesCSV));

var things = bestThing.slice(' ');
text('Words from bestThing',JSON.stringify(things));

var semi = gotCitiesCSV.split(',');
text('GOT seperated by semicolons',JSON.stringify(semi.join(';')));

text('CSV of LOTR',lotrCitiesArray.join(','));

var l = lotrCitiesArray.length;
var str = '';
for(var i = l-5;i<l;i++){
    if(i!=l-1)
        str+=lotrCitiesArray[i]+', ';
    else
        str+=lotrCitiesArray[i];
}
text('Last 5 of LOTR',str);

var lotr = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
var woRohan=lotr.splice(0,2).concat(lotr.splice(1,5));
text('LOTR without Rohan',JSON.stringify(woRohan));

var temp = bestThing;
text('23-38 of bestThing',temp.slice(23,38));

text('Index of only',bestThing.indexOf('only'));

var doubleVow=[];
for(var i=0;i<semi.length;i++){
    if(semi[i].indexOf('aa')!=-1||semi[i].indexOf('ee')!=-1||semi[i].indexOf('ii')!=-1||semi[i].indexOf('oo')!=-1||semi[i].indexOf('uu')!=-1){
        doubleVow.push(semi[i]);
    }
}
text('Double Vowels',JSON.stringify(doubleVow));

var sorted = lotrCitiesArray.sort(function(a,b){
    return a.length-b.length;
})
text('LOTR Sorted',JSON.stringify(sorted));