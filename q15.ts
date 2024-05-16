//question 15
let friends:string[]=["abid","muhammad","sanobia"];
let notCame:string="sanobia";
console.log(`${notCame}, you can't came in my dinner?`) 

let newGuest:string= "aliza";
friends[friends.indexOf (notCame)]=newGuest;

friends.forEach(friend => {console.log(`i would like to invite in my grand dinner ${friend}`)});