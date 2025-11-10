let users = ["Carlos", "Hector", "Sergio", "Daniel","Horacio"]

function enter(userName, email) {
    console.log("This process take a moment...");
    setTimeout(function (){
        console.log(`Users, hi ${userName}`)
        for(let i = 0; i < users.length; i++){
            console.log(users[i])
        }
        console.log(`Hello ${userName} 
email: ${email}`);

   },1500)
}

function outSystem(userName, email) {
    console.log("You are leaving the system...");
    setTimeout(() =>
        console.log(`Good bye ${userName}`),1500)
}

function processInformation(userName, email,callback) {
    callback(userName, email);
}

processInformation("Enrique Garcia", "garciarojasbe@gmail.com", outSystem);