let userDetails = true;

let promise = new Promise(function(resolve, reject){
    if (userDetails){
        setTimeout(resolve('User details available'), 5000);
    }else{
        setTimeout(reject(' No user details available'), 5000);
    }
});

async function getUserDetails(){
    let response = await promise;
    console.log({response});
}
getUserDetails();