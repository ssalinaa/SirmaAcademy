console.log("--------------- TASK 1 ---------------");
console.log();

function printCharacters(str) {
    console.log("Task 1:");

    for(let ch of str) {
        console.log(ch);
    }
    console.log();
}
printCharacters('AWord');
printCharacters('Sentence');


console.log("--------------- TASK 2 ---------------");
console.log();

function substring(str, num1, num2) {
    console.log("Task 2:");

    console.log(str.substring(num1, num1 + num2));
    console.log();
}
substring('ESentence', 1, 8);
substring('DropWord', 4, 7);


console.log("--------------- TASK 3 ---------------");
console.log();

function censor(text, word) {
    console.log("Task 3:");

    let count = word.length;
    let stars = "";
    for(let i = 0; i < count; i++) {
        stars += "*";
    }
    let replacedText = text.split(word).join(stars);
    console.log(replacedText);
    console.log();
}

censor('A small sentence with some words', 'small');
censor('Find the hidden word', 'hidden');
censor('A small sentence with small words', 'small');

console.log("--------------- TASK 4 ---------------");
console.log();

function revealWords(str, stars) {
    console.log("Task 4:");

    let words = str.split(', ');
    let sentenceWords = stars.split(' ');

    for(let i = 0; i < sentenceWords.length; i++) {
        if(sentenceWords[i].includes('*')) {
            for(let j = 0; j < words.length; j++) {
                if(words[j].length === sentenceWords[i].length) {
                    sentenceWords[i] = words[j];
                    words.splice(j, 1);
                    break;
                }
            }
        }
    }
    console.log(sentenceWords.join(' '));
    console.log();
}

revealWords('great', 'JavaScript* is ***** programming language');
revealWords('the, best, learn', 'JavaScript is *** **** language to *****');

console.log("--------------- TASK 5 ---------------");
console.log();

function hashTag(str) {
    console.log("Task 5:");

    let words = str.split(' ');
    let specialWords = [];
    for(let word of words) {
        if(word.startsWith('#')) {
            let tag = word.slice(1);
            if(/^[A-Za-z]+$/.test(tag)) {
                specialWords.push(tag);
            }
        }
    }
    for(let word of specialWords) {
        console.log(word);
    }
    console.log();
}
hashTag('Everyone uses # to tag a #special word in #facebook');
hashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');

console.log("--------------- TASK 6 ---------------");
console.log();

function extractFile(path) {
    console.log("Task 6:");

    let parts = path.split("\\");
    let fileWithExt = parts[parts.length - 1];

    let lastDotIndex = fileWithExt.lastIndexOf(".");
    let fileName = fileWithExt.slice(0, lastDotIndex);
    let fileExtension = fileWithExt.slice(lastDotIndex + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
    console.log();
}
extractFile('C:\\desktop\\academy\\template.pptx');
extractFile('C:\\Projects\\website.folder\\file.name.js');

console.log("--------------- TASK 7 ---------------");
console.log();

function isSubstring(word, text) {
    console.log("Task 7:");

    let lowerCaseWord = word.toLowerCase();
    let lowerCaseText = text.toLowerCase();

    if(lowerCaseText.includes(lowerCaseWord)) {
        console.log(lowerCaseWord); 
    } else {
        console.log(`${lowerCaseWord} not found!`);
    }
    console.log();
}
isSubstring('javascript', 'JavaScript is the best programming language');
isSubstring('python', 'JavaScript is the best programming language');

console.log("--------------- TASK 8 ---------------");
console.log();

function replaceRepeatingSymbols(str) {
    console.log("Task 8:");

    let newStr = str[0];
    for(let i = 1; i < str.length; i++) {
        if(str[i] !== str[i - 1]) {
            newStr += str[i];
        }
    }

    // let result = str.replace(/(.)\1+/g, '$1');
    // console.log(result);
    console.log(newStr);
    console.log();
}
replaceRepeatingSymbols('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingSymbols('qqqwerqwecccwd');

console.log("--------------- TASK 9 ---------------");
console.log();

function pascalCaseSplitter(str) {
    console.log("Task 9:");

    let strings = [];
    let word = str[0];
    for(let i = 1; i < str.length; i++) {
        if(str[i] !== str[i].toUpperCase()) {
            word += str[i];
        } else {
            strings.push(word);
            word = str[i];
        }
    }
    strings.push(word);
    console.log(strings.join(', '));
    console.log();
}
pascalCaseSplitter('SplitMeIfYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoying');


console.log("--------------- TASK 10 ---------------");
console.log();

function cutAndReverse(str) {
    console.log("Task 10:");

    // let firstString = "";
    // let secondString = "";

    // for(let i = str.length / 2 - 1; i >= 0; i--) {
    //     firstString += str[i];
    // }
    // for(let i = str.length - 1; i >= str.length / 2; i--) {
    //     secondString += str[i];
    // }
    // console.log(firstString);
    // console.log(secondString);
    // console.log();

    let middleIndex = str.length / 2;
    let firstHalf = str.substring(0, middleIndex);
    let secondHalf = str.substring(middleIndex);

    let reversedFirstHalf = firstHalf.split('').reverse().join('');
    let reversedSecondHalf = secondHalf.split('').reverse().join('');
    
    console.log(reversedFirstHalf);   
    console.log(reversedSecondHalf);   
    console.log();   
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');

console.log("--------------- TASK 11 ---------------");
console.log();

function fillLetter(letter, words) {
    letter = letter.replace(/_+/g, match => {
        let word = words.find(w => w.length === match.length); // Find a matching word
        words.splice(words.indexOf(word), 1); // Remove used word
        return word; // Replace the blank
    });

    console.log(letter);
    console.log();
}

fillLetter(
    "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so many _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']
);


console.log("--------------- TASK 12 ---------------");
console.log();

function matchFullName(names) {
    console.log("Task 12:");

    let namesList = names.split(', ');
    let matchedNames = [];
    for(let name of namesList) {
        let nameParts = name.split(' ');
        if(nameParts.length == 2 &&
           nameParts[0][0] === nameParts[0][0].toUpperCase() &&
           nameParts[1][0] === nameParts[1][0].toUpperCase() &&
           nameParts[0].slice(1).toLowerCase() === nameParts[0].slice(1) &&
           nameParts[1].slice(1).toLowerCase() === nameParts[1].slice(1)) {
                matchedNames.push(name);
           }
    }
    console.log(matchedNames.join(', '));
    console.log();
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov");
