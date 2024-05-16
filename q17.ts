//question 17
let friends:string[] = ["abid","muhammad","aliza"];
console.log("unfortunately, I can only two people for dinner")

while(friends.length>2){let removedFriend = friends.pop()
console.log(`sorry, ${removedFriend} , I can't invite you for dinner`)}

friends.splice(0, friends.length);
console.log(friends);

