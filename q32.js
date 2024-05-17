//question 32
let currentUsers = ['aliza', 'sabahat', 'saima', 'abid', 'm.raza', 'hussain'];
let newUsers = ['sanobia', 'arisha', 'hasina', 'sajid'];
newUsers.forEach((newUser) => {
    if (currentUsers.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new userName.`);
    }
    else {
        console.log(`${newUser} is avaliabie.`);
    }
});
export {};
