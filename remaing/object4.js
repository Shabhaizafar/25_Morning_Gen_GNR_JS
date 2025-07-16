// Create a Multiple Object Using Function : 
var AllMethods = {
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


function Person(fname, lname, age) {
    var user = Object.create(AllMethods);
    user.firstname = fname;
    user.lastname = lname;
    user.age = age;
    return user;
}


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


// proto and prototype   : empty space 