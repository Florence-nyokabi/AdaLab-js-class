let num = [10, 30, 3, 8, 7, 16, 45];
for (let i = 0; i < num.length; i++){
    console.log(i);
    console.log(num[i]);
}

for (let i = 0; i < num.length; i++){
    if(i === 3){
        break;
    }
    console.log({"num": num[i]});
}
for (let i = 0; i < num.length; i++){
    if(i === 3){
        continue;
    }
    console.log({"num": num[i]});
}