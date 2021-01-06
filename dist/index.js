"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genestisBlock = new Block(0, "2020202020", "", "Hello", 123456);
let blockChain = [genestisBlock];
console.log(blockChain);
//# sourceMappingURL=index.js.map