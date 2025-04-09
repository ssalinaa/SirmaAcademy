function personData(name, surname, age) {
    console.log("Task 1:");
    let person = {
        firstName:name,
        lastName:surname,
        age:age
    };
    return person;
}

console.log(personData("Ivan", "Ivanov", 29));
console.log(personData("Maria", "Marinova", 13));
console.log();


function town(object) {
    console.log("Task 2:");
    for(let key in object) {
        console.log(`${key} -> ${object[key]}`);
    }
}

let city = {
    name: "Sofia",
    population: 1234567,
    country: "Bulgaria",
    postcode: "1000"
}

town(city);
console.log();

function convertToObject(text) {
    console.log("Task 3:");
    let obj = JSON.parse(text);
    for(let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

convertToObject('{"name":"Ivan", "age":40, "town":"Sofia"}');
convertToObject('{"firstName":"Ivan", "lastName":"Ivanov"}');
console.log();

function convertToJSON(name, surname, eyeColor) {
    console.log("Task 4:");
    let obj = {
        name:name,
        surname:surname, 
        eyeColor:eyeColor
    };
    let text = JSON.stringify(obj);
    console.log(text);
}

convertToJSON("Ivan", "Ivanov", "blue");
convertToJSON("Maria", "Petrova", "brown");
console.log();

function PhoneBook(array) {
    console.log("Task 5:");
    let phoneBook = {};
    for(let element of array) {
        const [name, ...phoneParts] = element.split(" ");
        const phone = phoneParts.join(" ");
        phoneBook[name] = phone;
    }

    for(let name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
    console.log();
}

PhoneBook(["Peter 0888 657 212", "Bob 0899 657 212", "Peter 123123"]);
PhoneBook(["Maria 123", "Samantha 456", "Nicole 789"]);

function Movies(array) {
    console.log("Task 6:");
    let movies = {};
    for(let command of array) {
        if(command.startsWith("addMovie ")) {
            let movieName = command.slice(9);
            if(!movies[movieName]) {
                movies[movieName] = {name: movieName, director: null, date: null};
            }
        } else if(command.includes(" directedBy ")) {
            let [movieName, director] = command.split(" directedBy ");
            if(movies[movieName]) {
                movies[movieName].director = director;
            }
        } else if(command.includes(" onDate ")) {
            let [movieName, date] = command.split(" onDate ");
            if(movies[movieName]) {
                movies[movieName].date = date;
            }
        }
    }

    let completeMovies = [];
    for(let movieName in movies) {
        let movie = movies[movieName];
        if(movie.director && movie.date) {
            completeMovies.push(movie);
        }
    }
    console.log(JSON.stringify(completeMovies, null, 4));
    console.log();
}

Movies(["addMovie Fast and Furious", "addMovie Godfather",
    "Inception directedBy Christopher Nolan", "Godfather directedBy Francis Ford Coppola", 
    "Godfather onDate 29.07.2018",
    "Fast and Furious onDate 30.07.2018",
    "Spinderman 2 onDate 01.08.2018",
    "Fast and Furious directedBy Rob Cohen"]);

Movies([
    "addMovie The Avengers",
    "addMovie Spiderman",
    "The Avengers directedBy Pesho Peshov",
    "The Avengers onDate 30.07.2010",
    "Captain America onDate 30.07.2010",
    "Captain America directedBy Joe Russo",
    "The Avengers directedBy Anthony Russo"]);