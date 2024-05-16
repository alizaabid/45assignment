//question 15
let friends = ["abid", "muhammad", "sanobia"];
let notCame = "sanobia";
console.log(`${notCame}, you can't came in my dinner?`);
let newGuest = "aliza";
friends[friends.indexOf(notCame)] = newGuest;
friends.forEach(friend => { console.log(`i would like to invite in my grand dinner ${friend}`); });
export {};
