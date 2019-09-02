/**
 * Hash Table (aka Hash Map) - most languages have a built in hash table class
 * - Hash tables are used to store key value pairs
 * - the are like arrays, but the keys are not ordered
 * - unlike arrays, hash tables are fiast for all of the following operations:
 * - finding values
 * - adding values
 * - removing values
 * the javascript object is a basic hash table
 * certian things make a hash table optimal 
 * hashing should be constant time
 * 
 * The below is the reinvention of the wheel.....
 */

const hash = function(key, arrLen) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * prime + value) % arrLen;
    }
    return total;
}

// console.log(hash('pink', 13));
// console.log(hash('telbirts', 13));
// console.log(hash('cyan', 13));
// console.log(hash('goodbye', 13));

/** 
 * Separate Chainging - With separate chainging, at each index in our array,
 * we store values using a more sophisticaed data structure (arrays or linked list)
 * this allows us to store multiple key-value pairs at the same index.
 * 
 * Linesar Probing - when we fid a collision, we search through the array to find the next empty slot.
 * unlike with separate chaining this allows us to store a single key value at each index
 */

class HashTable {
    constructor (size=7) {
        this.keyMap = new Array(size)
    }
    _hash(key) {
        let total = 0;
        let prime = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * prime + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value) {
        let index = this._hash(key.toLowerCase());
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        } 
        this.keyMap[index].push([key, value]);
    }
    get(key) {
        let index = this._hash(key.toLowerCase());
        let bucket = this.keyMap[index]
        if (Array.isArray(bucket)) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    return bucket[i][1]
                }
            } 
        }
        return undefined
    }
    keys() {
        let result = new Set();
        for(let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    result.add(this.keyMap[i][j][0]);
                }                
            }
        }
        return Array.from(result)
    }
    values() {
        let result = new Array();
        for(let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    result.push(this.keyMap[i][j][1]);
                }                
            }
        }
        return result
    }
}

let myHashTable = new HashTable();

myHashTable.set('telbirts', 'striblet')
myHashTable.set('Jonathan', 'striblet')
myHashTable.set('ashley', 'is cool')
myHashTable.set('pink', '#ffoods')
myHashTable.set('blue', '#ffoadfgods')

myHashTable.get('Jonathan')

console.log(myHashTable);
console.log(myHashTable.get('Jonathan'));
console.log(myHashTable.get('ashley'));
console.log(myHashTable.values());
console.log(myHashTable.keys());
console.log();