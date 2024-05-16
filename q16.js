//question 16
let friends = ["abid", "muhammad", "aliza"];
console.log("good nnews, I arrange bigger dinner and more guests & friends.");
friends.unshift("sabahat", "arisha", "hussain");
friends.splice(friends.length / 2, 0, "hasina");
friends.push("sanobia");
friends.forEach(friend => { console.log(`dear friends ${friend} would you come my grand dinner party.`); });
export {};
