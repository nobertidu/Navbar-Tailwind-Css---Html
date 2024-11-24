// object = A collection of related properties and/or methods
//                Can represent real world objects (people, products, places)
//                object = {key:value,
//                                 function()}



const person1= {
    firstName: "Nifemi",
    lastName: "Martins",
    age: 300,
    matricNo : "CSC/23/6745",
    isStudent: true,
    sayHello: function(){console.log("Hi! I welcome Nifemi Martins")},
    eat: function(){console.log("I am eating a Krabby Patty")},
    password:"ruieufwefeqw48y4y",
    grade: {
        math: 90,
        CSC105 : 45,
        CULCSC176: 87,
        PHY102: 90,
        GST112: 66,
    }
}

person1.age = 24; 
person1.medicalStatus = 'LASA FEVER, EBOLA, BIG HEAD, RED FACE';
person1.occupation = 'Upcoming FullStack Developer, UI/UX designer';



const person2= {
    firstName: "Nifemi",
    lastName: "Martins",
    age: 300,
    matricNo : "CSC/23/6745",
    isStudent: true,
    sayHello: function(){console.log("Hi! I welcome Nifemi Martins")},
    eat: function(){console.log("I am eating a Krabby Patty")},
    password:"ruieufwefeqw48y4y",
}


delete person1.age;
delete person1.isStudent;
delete person1.matricNo;

console.log(person1.grade);
// console.log(person1.firstName);
// console.log(person1.matricNo);
// console.log(person1.age);
// person1.sayHello();
// person1.eat();


