function Person (name, age, height){
    this.name = name;
    this.age = age;
    this.height = height;
    this.greet = function(){
        console.log('Hello');
    }
};

let adam = new Person ('Adam', 25, '7ft');
console.log({adam});

adam.weight = 60;
console.log({adam});
// adam.greet();

let eve = new Person('Eve', 20, '5ft');
console.log({eve});
// eve.greet();

// Prototypes
Person.prototype.race = "black";
Person.prototype.nationality = "Kenyan";

Person.prototype.yearOfBirth = function(){
    let year = new Date().getFullYear();

    let birth = year - this.age;
    console.log(birth);
}
adam.yearOfBirth();

console.log(adam.race);
console.log(adam.nationality);

console.log(eve.race);
console.log(eve.nationality);
eve.nationality = "Ugandan";
console.log({eve});

console.log({adam});







