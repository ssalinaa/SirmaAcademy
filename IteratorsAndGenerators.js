// // // // const arr = [10, 20, 30];
// // // // const iterator = arr[Symbol.iterator]();
// // // // console.log(iterator.next());
// // // // console.log(iterator.next());
// // // // console.log(iterator.next());

// // // // const string = "asd";
// // // // const iteratorA = string[Symbol.iterator]();
// // // // console.log(iteratorA.next());
// // // // console.log(iteratorA.next());
// // // // console.log(iteratorA.next());
// // // // console.log(iteratorA.next());

// // // // const newMap = new Map();
// // // // newMap.set("asd", 2);
// // // // newMap.set("buzz", 3);

// // // // console.log(newMap);
// // // // const iteratorB = newMap[Symbol.iterator]();
// // // // console.log(iteratorB.next());
// // // // console.log(iteratorB.next());
// // // // console.log(iteratorB.next());

// // // class Node {
// // //     constructor(data) {
// // //         this.data = data;
// // //         this.next = null;
// // //     }
// // // }

// // // class LinkedList {
// // //     constructor() {
// // //         this.head = null;
// // //         this.last = null;
// // //     }

// // //     [Symbol.iterator]() {
// // //         let current = this.head;
// // //         return {
// // //             next() {
// // //                 if(current) {
// // //                     let value = current.data;
// // //                     current = current.next;
// // //                     return { value, done: false };
// // //                 }
// // //                 return {done: true};
// // //             },
// // //         };
// // //     }
// // // }

// // // const list = new LinkedList();
// // // console.log(list);
// // // const node = new Node("asd");
// // // console.log(node);

// // // const node2 = new Node("node2");
// // // node.next = node2;
// // // list.head = node;

// // // const iterator = list[Symbol.iterator]();
// // // console.log(iterator.next());
// // // console.log(iterator.next());

// // class Range {
// //     constructor(start, end) {
// //         this.start = start;
// //         this.end = end;
// //     }
// //     [Symbol.iterator]() {
// //         let current = this.start, 
// //         end = this.end;
// //         return {
// //             next() {
// //                 if(current <= end) {
// //                     return {value:current++, done:false};
// //                 }
// //                 else {
// //                     return {done:true};
// //                 }
// //             },
// //         };
// //     }
// // }

// // const range = new Range(1, 5);
// // for(let num of range) {
// //     console.log(num);
// // }


// class DataStream {
//     constructor(data, chunkSize) {
//         this.data = data;
//         this.chunkSize = chunkSize;
//     }
//     [Symbol.iterator]() {
//         let index = 0;
//         const data = this.data,
//         size = this.chunkSize;
//         return {
//             next() {
//                 if(index < data.length) {
//                     let chunk = data.slice(index, index + size);
//                     index += size;
//                     return {value:chunk, done:false};
//                 }
//                 return {done:true};
//             },
//         };
//     }
// }
// const data = new DataStream("Hello, buddy!", 3);
// for(let chunk of data)  {
//     console.log(chunk);
// }

// function* generator() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield "hello";
// }
// const gen = generator();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// function* generatorB() {
//     yield 10;
//     yield 11;
// }

// function* generatorA() {
//     yield 1;
//     yield* generatorB();
//     yield 3;
// }

// const complex = generatorA();
// console.log(complex.next());
// console.log(complex.next());
// console.log(complex.next());
// console.log(complex.next());
// console.log(complex.next());
// console.log(complex.next());
// console.log(complex.next());

console.log("--------------- TASK 1 ---------------");
console.log();

const obj = {
    a: 'apple',
    b: 'banana',
    c: 'cherry'
};

obj[Symbol.iterator] = function() {
    const keys = Object.keys(this);
    let index = 0;
    return {
        next: () => {
            if(index < keys.length) {
                return {value: this[keys[index++]], done: false};
            } else {
                return {done: true};
            }
        }
    };
};

for(const value of obj) {
    console.log(value);
}
console.log();

console.log("--------------- TASK 2 ---------------");
console.log();

function* fibonacci(a = 0, b = 1) {
    yield b;
    yield* fibonacci(b, a + b);
}

const fib = fibonacci();
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log();

console.log("--------------- TASK 3 ---------------");
console.log();

class OddIterator {
    constructor(array) {
        this.array = array;
        this.index = 0;
    }

    [Symbol.iterator]() {
        return {
            array: this.array,
            index: this.index,
            next() {
                while(this.index < this.array.length) {
                    let value = this.array[this.index++];
                    if(value % 2 !== 0) {
                        return {value, done: false };
                    }
                }
                return {done: true };
            }
        };
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddValues = new OddIterator(arr);
for(const value of oddValues) {
    console.log(value);
}
console.log();

console.log("--------------- TASK 4 ---------------");
console.log();

function* createRange(start, end) {
    for(let i = start; i <= end; i++) {
        yield i;
    }
}

const rangeGen = createRange(2, 6);
console.log(rangeGen.next().value);
console.log(rangeGen.next().value);
console.log();

console.log("--------------- TASK 5 ---------------");
console.log();

class SequenceGenerator {
    constructor() {
        this.current = 1;
    }
    *[Symbol.iterator]() {
        while(true) {
            yield this.current++;
        }
    }
}

let seqGen = new SequenceGenerator()[Symbol.iterator]();
console.log(seqGen.next().value);
console.log(seqGen.next().value);
console.log(seqGen.next().value);
console.log(seqGen.next().value);
console.log();

console.log("--------------- TASK 6 ---------------");
console.log();

class ReverseIterator {
    constructor(array) {
        this.array = array;
    }

    [Symbol.iterator]() {
        let index = this.array.length - 1;
        return {
            next: () => {
                while(index >= 0) {
                    return {value: this.array[index--], done: false };
                }
                return {done: true };
            }
        };
    }
}

const array1 = [1, 2, 3];
let reverseIterator1 = new ReverseIterator(array1)[Symbol.iterator]();
console.log(reverseIterator1.next().value);
console.log(reverseIterator1.next().value);
console.log(reverseIterator1.next().value);
console.log();

const array2 = ['a', 'b', 'c'];
let reverseIterator2 = new ReverseIterator(array2)[Symbol.iterator]();
console.log(reverseIterator2.next().value);
console.log(reverseIterator2.next().value);
console.log(reverseIterator2.next().value);
console.log();

const array3 = [5, 4, 3, 2, 1];
let reverseIterator3 = new ReverseIterator(array3)[Symbol.iterator]();
console.log(reverseIterator3.next().value);
console.log(reverseIterator3.next().value);
console.log(reverseIterator3.next().value);
console.log(reverseIterator3.next().value);
console.log(reverseIterator3.next().value);
console.log();

console.log("--------------- TASK 7 ---------------");
console.log();

function* primeGenerator() {
    let num = 2;
    while(true) {
        if(isPrime(num)) {
            yield num; 
        }
        num++;
    }
}

function isPrime(n) {
    if(n < 2) return false;
    for(let i = 2; i * i <= n; i++) {
        if(n % i === 0) return false;
    }
    return true;
}

const primes = primeGenerator();
console.log(primes.next().value);
console.log(primes.next().value);
console.log(primes.next().value);
console.log(primes.next().value);
console.log(primes.next().value);
console.log(primes.next().value);
console.log();

console.log("--------------- TASK 8 ---------------");
console.log();

function* combinationGenerator(arr, start = 0, current = []) {
    for(let i = start; i < arr.length; i++) {
        current.push(arr[i]);
        yield current.slice();
        yield* combinationGenerator(arr, i + 1, current);
        current.pop();
    }
}

let arr1 = [1, 2];
const generator1 = combinationGenerator(arr1);
for(const combo of generator1) {
    console.log(combo.join(' '));
}
console.log();


let arr2 = ['a', 'b', 'c'];
const generator2 = combinationGenerator(arr2);
for(const combo of generator2) {
    console.log(combo.join(' '));
}
console.log();

let arr3 = [5, 6];
const generator3 = combinationGenerator(arr3);
for(const combo of generator3) {
    console.log(combo.join(' '));
}
console.log();

console.log("--------------- TASK 9 ---------------");
console.log();

class SkippingIterator {
    constructor(array) {
        this.array = array;
        this.index = 0;
    }
    [Symbol.iterator]() {
        let array = this.array;
        let index = this.index;
        return {
            next() {
                if(index < array.length) {
                    let value = array[index];
                    index += 2;
                    return {value, done: false };
                }
                return {done: true };
            }
        };
    }
}

const arr4 = [1, 2, 3, 4];
let skippingIterator1 = new SkippingIterator(arr4)[Symbol.iterator]();
console.log(skippingIterator1.next().value);
console.log(skippingIterator1.next().value);
console.log();

const arr5 = ['a', 'b', 'c', 'd'];
let skippingIterator2 = new SkippingIterator(arr5)[Symbol.iterator]();
console.log(skippingIterator2.next().value);
console.log(skippingIterator2.next().value);
console.log();

const arr6 = [5, 6, 7, 8, 9];
let skippingIterator3 = new SkippingIterator(arr6)[Symbol.iterator]();
console.log(skippingIterator3.next().value);
console.log(skippingIterator3.next().value);
console.log(skippingIterator3.next().value);
console.log();

console.log("--------------- TASK 10 ---------------");
console.log();

function* arrayFlattenGenerator(array) {
    for(const element of array) {
        if(Array.isArray(element)) {
            yield* arrayFlattenGenerator(element);
        } else {
            yield element;
        }
    }
}

const arr7 = [[1, 2], [3, 4]];
const generator4 = arrayFlattenGenerator(arr7);
console.log([...generator4].join(', '));
console.log();

const arr8 = ['a', ['b', 'c'], ['d', 'e']];
const generator5 = arrayFlattenGenerator(arr8);
console.log([...generator5].join(', '));
console.log();

const arr9 = [[5, 6], 7, [8, 9]];
const generator6 = arrayFlattenGenerator(arr9);
console.log([...generator6].join(', '));
console.log();

console.log("--------------- TASK 11 ---------------");
console.log();

function* charCodeGenerator(str) {
    for(const ch of str) {
        yield ch.charCodeAt(0);
    }
}

let str1 = "ab";
const generator7 = charCodeGenerator(str1);
console.log([...generator7].join(', '));
console.log();

let str2 = "cd";
const generator8 = charCodeGenerator(str2);
console.log([...generator8].join(', '));
console.log();

let str3 = "ef";
const generator9 = charCodeGenerator(str3);
console.log([...generator9].join(', '));
console.log();

console.log("--------------- TASK 12 ---------------");
console.log();

function* powerOfTwoGenerator() {
    let num = 1;
    while(true) {
        yield num;
        num *= 2;
    }
}

const generator10 = powerOfTwoGenerator();
let result = [];
for(let i = 0; i < 10; i++) {
    result.push(generator10.next().value);
}
console.log(result.join(', '));
console.log();

console.log("--------------- TASK 13 ---------------");
console.log();

class FilteredIterator {
    constructor(array, test) {
        this.array = array;
        this.test = test;
    }

    [Symbol.iterator]() {
        let index = 0;
        const array = this.array;
        const test = this.test;

        return {
            next() {
                while(index < array.length) {
                    let value = array[index++];
                    if(test(value)) {
                        return {value, done: false };
                    }
                }
                return {done: true };
            }
        };
    }
}

let iterator1 = new FilteredIterator([1, 2, 3, 4, 5], x => x % 2 == 0);
console.log([...iterator1].join(", "));
console.log();

let iterator2 = new FilteredIterator(['apple', 'banana', 'cherry'], word => word.length > 5);
console.log([...iterator2].join(", ")); 
console.log();

let iterator3 = new FilteredIterator([5, 6, 7, 8, 9, 10], x => x > 7);
console.log([...iterator3].join(", ")); 
console.log();

console.log("--------------- TASK 14 ---------------");
console.log();

function* createGenerator(values) {
    for(let value of values) {
        yield value;
    }
}

function* chainedGenerators(...generators) {
    for(let generator of generators) {
        yield* generator;
    }
}

let gen1 = createGenerator([1, 2]);
let gen2 = createGenerator([3, 4]);
let gen3 = createGenerator(['a', 'b']);
let gen4 = createGenerator(['c', 'd']);
let gen5 = createGenerator([5, 6]);
let gen6 = createGenerator([7, 8]);

let combinedGenerators1 = chainedGenerators(gen1, gen2);
console.log([...combinedGenerators1].join(", "));
console.log(); 

let combinedGenerators2 = chainedGenerators(gen3, gen4);
console.log([...combinedGenerators2].join(", "));
console.log();

let combinedGenerators3 = chainedGenerators(gen5, gen6);
console.log([...combinedGenerators3].join(", "));
console.log();

console.log("--------------- TASK 15 ---------------");
console.log();

class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        if(this.isEmpty()) {
            return "Queue is empty.";
        }
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length === 0;
    }

    [Symbol.iterator]() {
        let index = 0;
        let items = this.items;
        return {
            next() {
                if(index < items.length) {
                    return {value: items[index++], done: false };
                } else {
                    return {done: true };
                }
            }
        };
    }
}

let queue1 = new Queue();
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
console.log([...queue1].join(', '));
console.log();

let queue2 = new Queue();
queue2.enqueue('a');
queue2.enqueue('b');
queue2.enqueue('c');
console.log([...queue2].join(', '));
console.log();

let queue3 = new Queue();
queue3.enqueue(5);
queue3.enqueue(6);
queue3.enqueue(7);
console.log([...queue3].join(', '));
console.log();

console.log("--------------- TASK 16 ---------------");
console.log();

class Stack {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        if(isEmpty()) {
            return "Stack is empty.";
        }
        return this.items.pop();
    }
    isEmpty() {
        return this.items.length === 0;
    }

    [Symbol.iterator]() {
        let items = this.items;
        let index = items.length - 1;
        return {
            next() {
                if(index >= 0) {
                    return {value: items[index--], done: false };
                }
                return {done: true };
            }
        };
    }
}

let stack1 = new Stack();
stack1.enqueue(1);
stack1.enqueue(2);
stack1.enqueue(3);
console.log([...stack1].join(', '));
console.log();

let stack2 = new Stack();
stack2.enqueue('a');
stack2.enqueue('b');
stack2.enqueue('c');
console.log([...stack2].join(', '));
console.log();

let stack3 = new Stack();
stack3.enqueue(5);
stack3.enqueue(6);
stack3.enqueue(7);
console.log([...stack3].join(', '));
console.log();

console.log("--------------- TASK 16 ---------------");
console.log();

class SliceIterator {
    constructor(array, start, end) {
        this.array = array;
        this.start = start;
        this.end = end;
    }

    [Symbol.iterator]() {
        let array = this.array;
        let start = this.start;
        let end = this.end;
        return {
            next() {
                while(start <= end) {
                    return {value: array[start++], done: false };
                }
                return {done: true };
            }
        };
    }
}

const arr10 = [1, 2, 3, 4, 5];
let SliceIterator1 = new SliceIterator(arr10, 1, 3);
console.log([...SliceIterator1].join(', '));
console.log();

const arr11 = ['apple', 'banana', 'cherry', 'date'];
let SliceIterator2 = new SliceIterator(arr11, 0, 2);
console.log([...SliceIterator2].join(', '));
console.log();

const arr12 = [5, 6, 7, 8, 9, 10];
let SliceIterator3 = new SliceIterator(arr12, 4, 5);
console.log([...SliceIterator3].join(', '));
console.log();

console.log("--------------- TASK 17 ---------------");
console.log();

function* repeatGenerator(value, times) {
    while(times > 0) {
        yield value;
        times--;
    }
}

let generator11 = repeatGenerator(2, 3);
console.log([...generator11].join(', '));
console.log();

let generator12 = repeatGenerator("a", 4);
console.log([...generator12].join(', '));
console.log();

let generator13 = repeatGenerator(7, 2);
console.log([...generator13].join(', '));
console.log();

console.log("--------------- TASK 19 ---------------");

function* patternGenerator(array, times) {
    while(times > 0) {
        for(let element of array) {
            yield element;
        }
        times--;
    }
}

let generator14 = patternGenerator([1, 2, 3], 2);
console.log([...generator14].join(', '));
console.log();

let generator15 = patternGenerator(['a', 'b'], 3);
console.log([...generator15].join(', '));
console.log();

let generator16 = patternGenerator([5, 6], 2);
console.log([...generator16].join(', '));
console.log();

console.log("--------------- TASK 20 ---------------");
console.log();

function* decimalToBinaryConverter(number) {
    let binary = [];
    if(number === 0) {
        yield 0;
        return;
    }

    while(number > 0) {
        binary.push(number % 2);
        number = Math.floor(number / 2);
    }
    binary.reverse();
    yield binary.join('');
}

const generator17 = decimalToBinaryConverter(5);
console.log(generator17.next().value);
console.log();

const generator18 = decimalToBinaryConverter(8);
console.log(generator18.next().value);
console.log();

const generator19 = decimalToBinaryConverter(15);
console.log(generator19.next().value);
console.log();

console.log("--------------- TASK 21 ---------------");
console.log();

class MapIterator {
    constructor(map) {
        this.map = map;
    }

    [Symbol.iterator]() {
        let index = 0;
        let mapEntries = Array.from(this.map.entries());
        return {
            next() {
                if(index < mapEntries.length) {
                    const [key, value] = mapEntries[index++];
                    return {value: `${key}-${value}`, done: false };
                }
                return {done: true };
            }
        };
    }
}

let mapIterator1 = new MapIterator(new Map([[1, 'a'], [2, 'b'], [3, 'c']]));
console.log([...mapIterator1].join(', '));
console.log();

let mapIterator2 = new MapIterator(new Map([['a', 1], ['b', 2], ['c', 3]]));
console.log([...mapIterator2].join(', '));
console.log();

let mapIterator3 = new MapIterator(new Map([['x', 'apple'], ['y', 'banana'], ['z', 'cherry']]));
console.log([...mapIterator3].join(', '));
console.log();

console.log("--------------- TASK 22 ---------------");
console.log();

function* setComprehension(set, comprehension) {
    for(let element of set) {
        yield comprehension(element);
    }
}

let set1 = new Set([1, 2, 3, 4, 5]);
let comprehension1 = [...setComprehension(set1, x => x * 2)];
console.log(`{${comprehension1.join(', ')}}`);
console.log();

let set2 = new Set(['a', 'b', 'c']);
let comprehension2 = [...setComprehension(set2, x => x.toUpperCase())];
console.log(`{${comprehension2.join(', ')}}`);
console.log();

let set3 = new Set([5, 6, 7, 8, 9]);
let comprehension3 = [...setComprehension((set3), x => x - 4)];
console.log(`{${comprehension3.join(', ')}}`);
console.log();

console.log("--------------- TASK 23 ---------------");
console.log();

function* valueTransformationGenerator(array, transformation) {
    for(let element of array) {
        yield transformation(element);
    }
}

let arr13 = [1, 2, 3];
let transformation1 = valueTransformationGenerator(arr13, x => x * 2);
console.log([...transformation1].join(', '));
console.log();

let arr14 = ['apple', 'banana'];
let transformation2 = valueTransformationGenerator(arr14, word => word.length);
console.log([...transformation2].join(', '));
console.log();

let arr15 = [5, 6, 7];
let transformation3 = valueTransformationGenerator(arr15, x => x * x);
console.log([...transformation3].join(', '));
console.log();

console.log("--------------- TASK 24 ---------------");
console.log();

class PaginationIterator {
    constructor(dataset, size) {
        this.dataset = dataset;
        this.size = size;
        this.index = 0;
        this.pageCount = 1;
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                if(this.index < this.dataset.length) {
                    let page = this.dataset.slice(this.index, this.index + this.size);
                    this.index += this.size;
                    let result = `page ${this.pageCount}: ${page}`;
                    this.pageCount++;
                    return {value: result, done: false };
                }
                return {done: true };
            }
        };
    }
}

let dataset1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let paginationIterator1 = new PaginationIterator(dataset1, 3);
console.log([...paginationIterator1].join(', '));
console.log();

let dataset2 = ['a', 'b', 'c', 'd', 'e', 'f'];
let paginationIterator2 = new PaginationIterator(dataset2, 2);
console.log([...paginationIterator2].join(', '));
console.log();