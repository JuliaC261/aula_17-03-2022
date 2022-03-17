var multiply = (a,b) => {
  return new Promise ((resolve, reject) => {
    setTimeout( ()=> { return resolve(a+b) }, 5000);
  });
}

function chamada() {
  return new Promise(function(resolve){
    multiply(2,5).then(function (result) {
      resolve(result);
    })
  })
}

var chamada = () =>{
  return new Promise((resolve) => {
    multiply(2,5).then((result) => {
      resolve(result);
    });
  });
}

var obj = chamada ();
obj.then(function (result){
  console.log(result);
}).catch(function (error){
  console.log(result);
});