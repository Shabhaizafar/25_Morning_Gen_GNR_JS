// Single Level Inheritance :
// class Father{
//     constructor(fname){
//         this.fathername = fname;
//     }
//     property(){
//         console.log("Nothing 😌");
//     }
// }


// class Child extends Father{
//     constructor(cname,fname){
//         super(fname);
//         this.childname = cname;
//     }
//     bioData(){
//         console.log(`My name is ${this.childname} ${this.fathername}.`);
//     }
// }

// var c1 = new Child("Raj","Rajesh");

// console.log(c1);
// c1.property();
// c1.bioData();


//----------------------------------------------
// Multi level Inheritance : 
// class Grandfather{
//     constructor(gname){
//         this.grandfathername = gname;
//     }
//     greet(){
//         console.log("Greeting");
//     }
// };
// class Father extends Grandfather{
//     constructor(fname,gname){
//         super(gname);
//         this.fathername = fname;
//     }
//     property(){
//         console.log("Nothing 😌");
//     }
// }


// class Child extends Father{
//     constructor(cname,fname,gname){
//         super(fname,gname);
//         this.childname = cname;
//     }
//     bioData(){
//         console.log(`My name is ${this.childname} ${this.fathername}.`);
//     }
// }

// var c1 = new Child("Raj","Rajesh","Rajendra");

// console.log(c1);
// c1.property();
// c1.bioData();
// c1.greet();

// ----------------------------------------------------------------- 

class Father{
    constructor(fname){
        this.fathername = fname;
    }
    property(){
        console.log("Nothing 😌");
    }
}


class Boy extends Father{
    constructor(bname,fname){
        super(fname);
        this.boyname = bname;
    }
    bioData(){
        console.log(`My name is ${this.boyname} ${this.fathername}.`);
    }
}

class Girl extends Father{
    constructor(gname,fname){
        super(fname);
        this.girlname = gname;
    }
    bioData(){
        console.log(`My name is ${this.girlname} ${this.fathername}.`);
    }
}
var c1 = new Boy("Raj","Rajesh");

console.log(c1);
c1.property();
c1.bioData();




var c2 = new Girl("Avani","Rajesh");

console.log(c2);
c2.property();
c2.bioData();

/*
Sure! Here's the **real-life practice question only**:

---

### 🔹 **Question 1-1: Employee – Manager (Single Inheritance)**

You are building an employee tracking system for a company.

#### 🧱 Requirements:

* Create a class `Employee` with:

  * Properties: `name`, `id`, `salary`
  * Method: `displayInfo()` — prints the employee's details

* Create a class `Manager` that **inherits** from `Employee` and:

  * Adds property: `department`
  * Method: `displayManagerInfo()` — prints employee details + department

---

**Real-Life Use Case Example:**
A manager is also an employee, so you need to inherit the common properties from `Employee` and add manager-specific details.

---


### 🔷 **Question 1-1: Person → Doctor → Surgeon (Multilevel Inheritance)**


1. Create a base class `Person` with:

   * Properties: `name`, `age`
   * Method: `displayPersonInfo()` — prints name and age

2. Create a class `Doctor` that inherits from `Person`:

   * Adds property: `specialization`
   * Method: `displayDoctorInfo()` — prints name, age, and specialization

3. Create a class `Surgeon` that inherits from `Doctor`:

   * Adds property: `typeOfSurgery`
   * Method: `displaySurgeonInfo()` — prints full info (name, age, specialization, typeOfSurgery)



**Real-Life Scenario:**
A **surgeon** is a type of **doctor**, and a doctor is a type of **person** — hence the need for multilevel inheritance.

*/




















