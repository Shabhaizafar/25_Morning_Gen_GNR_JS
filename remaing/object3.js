// Create a Multiple Object Using Function : 
var AllMethods = {
    bioData: function () {
        console.log(`My Name is ${this.firstname} ${this.lastname}.`);
    },
    is18: function () {
        console.log(this.age > 18);
    }
};


function Person(fname, lname, age) {
    var user = {};
    user.firstname = fname;
    user.lastname = lname;
    user.age = age;
    user.bioData = AllMethods.bioData;
    user.is18 = AllMethods.is18;

    return user;
}


var obj1 = Person("Raj", "Shah", 13);

console.log(obj1);
obj1.bioData();
obj1.is18();

var obj2 = Person("Ajay", "Patel", 32);
console.log(obj2);
obj2.bioData();
obj2.is18();
























