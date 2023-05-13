let success = true;

let promise = new Promise(function(resolve, reject){
    if(success){
        resolve('I have everything');
    }
    else{
        reject('I am still poor');
    }
}).then(() => {console.log('It is a dream come true');})
.catch(() => {console.log('I will get my own money');})
.finally(() => { console.log('I will be happy');});
console.log({promise});

