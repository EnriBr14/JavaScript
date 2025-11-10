function adds(a,b,c){
    return a+b+c;
}

function resta(a,b,c){
    return a-b-c;
}

function operation(x,y,z,callback){
    console.log(callback(x,y,z))
}

console.log(operation(1,2,3,adds))