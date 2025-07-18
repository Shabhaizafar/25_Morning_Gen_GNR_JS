// class Person{

// };

// var obj = new Person();

// console.log(obj);




class Person{
    constructor(fname,lname,age){
        this.firstname = fname;
        this.lastname = lname;
        this.age = age;
    }
};

var obj = new Person("Raj","Shah",13);
console.log(obj);

var obj2= new Person("Ajay","Sharma",32);
console.log(obj2);

