var mypromise  = new Promise(function(success,reject){
    success();
    reject();
});



mypromise.then(()=>{
    console.log("Success");
},()=>{
    console.log("Reject");
});