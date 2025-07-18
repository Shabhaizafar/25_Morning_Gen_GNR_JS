// Create a Multiple Object Using Function : 
function Person(fname, lname, age) {
    var user = Object.create(Person.prototype);
    user.firstname = fname;
    user.lastname = lname;
    user.age = age;
    return user;
}
Person.prototype = {
    bioData: function () {
        console.log(`My Name is ${this.firstname} ${this.lastname}.`);
    },
    is18: function () {
        console.log(this.age > 18);
    },
    greet : function (){
        console.log("Hello ");
    }
};
// console.log(Person.prototype);

var obj1 = Person("Raj", "Shah", 13);

console.log(obj1);
obj1.bioData();
obj1.is18();
obj1.greet();

var obj2 = Person("Ajay", "Patel", 32);
console.log(obj2);
obj2.bioData();
obj2.is18();
obj2.greet();


console.log(obj1.__proto__);
console.log(obj2.__proto__);




// what is prototype ?
// difference between proto and prototype ?