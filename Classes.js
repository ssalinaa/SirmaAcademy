// // // class Student {
// // //     constructor(name, age) {
// // //         this.name = name;
// // //         this.age = age;
// // //     }
// // // }


// // // let studentA = new Student("Peter", 8);
// // // console.log(studentA.name, studentA.age);
// // // console.log(studentA);

// // // let studentB = new Student("Marry", 7);
// // // console.log(studentB.name, studentB.age);
// // // console.log(studentB);

// // // console.log(studentA instanceof Student);
// // // console.log(studentA instanceof Object);
// // // console.log({} instanceof Object);
// // // console.log([] instanceof Object);

// // // class Cat {
// // //     constructor(name, color, speed) {
// // //         this.name = name;
// // //         this.color = color;
// // //         this.speed = speed;
// // //     }
// // //     sayHello() {
// // //         console.log(`${this.name} Meow Meow`);
// // //     }
// // //     run() {
// // //         if(this.speed > 5) {
// // //             console.log("I am good");
// // //             return;
// // //         } else {
// // //             console.log("I am bad");
// // //         }
// // //     }
// // // }

// // // const newCat = new Cat("Pisana Pisanova", "red", 6);
// // // console.log(newCat.name);
// // // newCat.sayHello();
// // // newCat.run();


// // class Bulka {
// //     constructor(name, guest) {
// //         this.name = name;
// //         this.guest = guest;
// //     }

// //     static sayYes() {
// //        return "I will marry you.";
// //     }

// //     static offCourse() {
// //         console.log(`Of course ${this.sayYes()}`)
// //     }
// // }

// // let newBulka = new Bulka("Petkana", 359);
// // console.log(newBulka.guest);
// // Bulka.sayYes();
// // Bulka.offCourse();

// class Circle {
//     constructor(r) {
//         this.r = r;
//     }

//     get diameter() {
//         return this.r * 2;
//     }

//     set diameter(value) {
//         this.r = value / 2;
//     }
    
//     get area() {
//         return Math.PI * this.r * this.r;
//     }
// }

// const circle = new Circle(10);
// circle.diameter = 1.6;
// console.log(circle.area);
// console.log(circle.diameter);
// circle.diameter = 1.8; 
// console.log(circle.r);

// let set = new Set([1, 2, 2, 4, 5]);
// console.log(set);
// set.add(7);
// console.log(set);
// console.log(set.has(8));

// let set2 = new Set([1, 56, 3, 7, 56]);
// console.log(set2);
// set2.add(9);
// console.log(set2);
// set2.add(56);
// console.log(set2.has(9));

// let map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// console.log(map);
// console.log(map.get('a')); 
// console.log(map.get('b'));
// map.delete('a'); 
// console.log(map.size);
// console.log(map.has('a')); 
// console.log(map.has('b')); 

// class Box {
//     constructor(value) {
//         this.value = value;
//     }

//     getValue() {
//         return this.value;
//     }
// }

// let box = new Box("asd");
// console.log(box);
// console.log(box.getValue());

class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    meow() {
        console.log(`${this.name}, age ${this.age} says meow`);
    }
}

console.log("Task 1:");
let array1 = [];
let cat1 = new Cat("Mellon", 2);
let cat2 = new Cat("Tom", 3);
array1.push(cat1);
array1.push(cat2);

for(let cat of array1) {
    cat.meow();
}

let array2 = [];
let cat3 = new Cat("Branch", 1);
let cat4 = new Cat("Poppy", 3);
let cat5 = new Cat("Goldy", 2);

array2.push(cat3);
array2.push(cat4);
array2.push(cat5);

for(let cat of array2) {
    cat.meow();
}

console.log();

class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

console.log("Task 2:");
let person = new Person('Homer', 'Simpson', 42, 'homer@yahoo.com');
console.log(person.toString());
console.log();

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
    set diameter(value) {
        this.radius = value / 2;
    }
    get area() {
        return Math.PI * this.radius * this.radius;
    }
}

console.log("Task 3:");
let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
console.log();

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(point1, point2) {
        return Math.ceil(Math.sqrt(Math.pow((point2.x - point1.x), 2) + (Math.pow(point2.y - point1.y), 2)));
    }
}

console.log("Task 4:");
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
console.log();

class Laptop {
    constructor(info, quality) {
        this.info = info;
        this.quality = quality;
        this.isOn = false;
    }
    turnOn() {
        this.isOn = true;
        this.quality--;
    }
    turnOff() {
        this.isOn = false;
        this.quality--;
    }
    showInfo() {
        let str = JSON.stringify(this.info);
        return str;
    }
    get price() {
        return (800 - (this.info.age * 2) + (this.quality * 0.5));
    }
}

console.log("Task 5:");
let info1 = {producer: "Asus", age: 2, brand: "Zenbook"};
let laptop1 = new Laptop(info1, 10);
laptop1.turnOn();
console.log(laptop1.showInfo());
laptop1.turnOff();
console.log(laptop1.quality);
laptop1.turnOn();
console.log(laptop1.isOn);
console.log(laptop1.price);

let info2 = {producer: "Lenovo", age: 1, brand: "Legion"};
let laptop2 = new Laptop(info2, 10);
laptop2.turnOn();
console.log(laptop2.showInfo());
laptop2.turnOff();
laptop2.turnOn();
laptop2.turnOff();
console.log(laptop2.isOn);
console.log();


class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    calcArea() {
        return this.width * this.height;
    }
}

console.log("Task 7:");
let rect = new Rectangle(4, 5, 'Red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
console.log();

class Request {
    constructor(method, uri, version, message, response, fulfilled) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}

console.log("Task 8:");
let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '"');
console.log(myData);
console.log();

// function travel(array, destination) {
//     let newArray = array.split('|');
//     for(let i = array.length - 1; i >= 0; i--) {
//         let str = JSON.stringify(array[i]);
//         newArray.push(str);
//     }   
//     for(let element of newArray) {
//         console.log(element);
//     }
// }

// travel(['Philadelphia|94.20|available', 'New York City|95.99|available',
//         'New York City|95.99|sold', 'Boston|126.20|departed'], 'destination');


class List {
    constructor() { 
        this.set = new Set();
    }
    add(value) {
        set.add(value);
    }
    remove(index) {
        if(index < 0 || index > set.size) {
            console.log("Invalid index!");
            return;
        }
        for(let i = index; i < set.size; i++) {
            set[i] = set[i + 1];
        }
    }
    get(index) {
        return set[index];
    }
}

console.log("Task 10:");
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));


