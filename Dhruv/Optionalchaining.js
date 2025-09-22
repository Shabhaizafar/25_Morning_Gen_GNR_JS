var person = {
    fname : "Raj",
    lname : "Shah",
    address : {
        city : "GNR",
        state : "Gujarat",
        nation : "India"
    }
};
console.log(person);

// console.log(person.fname);
// console.log(person['address']);
// console.log(person['address'].city);




console.log(person?.fname);
console.log(person?.address);
console.log(person?.address?.city);

