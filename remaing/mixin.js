// Create an Empty Class  :
//  as a blueprint > object  
//  but in this case it's blueprint for another class :
class All {

};

// Parent Class :
const Father = (subclass) =>  class extends subclass{
    fathername = "Kalin Bhaiya";
}
const Mother = (subclass) =>  class extends subclass{
    mothername = "Meena Bhabhi";
}


// Main Class  : combine Data == mixin
class Mixin {
    constructor(subclass){
        this.subclass = subclass;
    }
    // Method:
    connector(...arr) {
        return arr.reduce((currentclass,nextclass)=>nextclass(currentclass),this.subclass);
    }
};


var Final = (data)=> new Mixin(data);


class Child extends Final(All).connector(Father,Mother){
    childname = "Munna Bhai";
}

const C1= new Child();
console.log(C1);