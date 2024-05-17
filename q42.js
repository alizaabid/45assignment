//question 42
let magicians = ["aliza", "arisha", "abid"];
function show_magicians(magicians) { magicians.forEach((magician) => { console.log(magician); }); }
function makeGreat(magician) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians + "the great";
    }
}
makeGreat(magicians);
show_magicians(magicians);
export {};
