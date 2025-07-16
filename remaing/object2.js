// Create a Single Object Using Function : 


function Person(){
    var user = {};
    user.firstname = "Raj";
    user.lastname = "Shah";
    user.age =  13;
    user.bioData = function ()  {
        console.log(`My Name is ${this.firstname} ${user.lastname}.`);
    }
    user.is18 = function (){
        console.log(user.age>18);
    }

    return user;
}


var obj1 = Person();

console.log(obj1);
obj1.bioData();
obj1.is18();

