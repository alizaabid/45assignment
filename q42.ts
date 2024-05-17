//question 42
let magicians:string[]= ["aliza","arisha","abid"];
function show_magicians(magicians:string[]){magicians.forEach((magician)=>{console.log(magician)});}

function makeGreat (magician:string[]){for(let i=0; i< magicians.length; i++){magicians[i]=magicians+"the great";}
}
makeGreat(magicians);
show_magicians(magicians)