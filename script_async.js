//Async / Await
async function multiply(a, b) {
return(a* b);
}

async function foo(){
var result= await multiply(2,5);
return result; 
}

var main = async () => {
var result = await foo();
console.log(result);
};
main();