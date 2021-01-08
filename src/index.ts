import * as CryptoJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    static calculateBlockHash = (
        index: number, previousHash: string, timestamp: number, data: string
        ): string =>
        CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    constructor (
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
        ){
            this.index = index;
            this.hash = hash;
            this.previousHash = previousHash;
            this.data = data;
            this.timestamp = timestamp;
        }
}

const genesisBlock: Block = new Block(0, "2020202020", "", "Hello", 123456);

let blockChain: Block[] = [genesisBlock];

console.log(blockChain);

// 블록체인이 얼마나 긴지 알아보는 것
// --> 내 블록체인에 블록을 하나 더 추가할 수 있게하기 위해
const getBlockChain = () : Block[] => blockChain;

//  블록체인의 길이를 알아야함(블록체인 안에서 가장 최근의 블록을 리턴)
const getLatestBlock = () : Block => blockChain[blockChain.length-1];

const getNewTimeStamp = () : number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data:string) : Block => {
    // 이전 블록 가져옴
    const previousBlock: Block = getLatestBlock();
    // 새 인덱스 가져옴(이전 인덱스 +1)
    const newIndex: number = previousBlock.index +1;
    const newTimestamp: number = getNewTimeStamp();
    const newHash: string = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
    const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
    return newBlock;
};

console.log(createNewBlock("Hello"), createNewBlock("Bye Bye"));

export {};

// 새로운 블록 만들기 위해선 hash 필요함
// hash: 모든 속성을 길고 수학적으로 하나의 문자열로 결합한 것
// cryptoJS 설치 --> yarn add crypto-js
// cryptoJS 임포트 --> import * as CryptoJS from "crypto=js";
// 블록의 hash를 계산해야함
// --> Block class 안에 static method 만듦
// static이란? class가 생성되지 않아도 호출할 수 있는 method 
//            --> Block class안에서 항상 사용 가능한 method
// static 없으면 Block class 밖에서 'Block.함수명' 이런 식으로 호출할 수 없음
// static 없이 class 밖에서 함수 호출 위해선 Block을 지정해야함(genesisBlock처럼)