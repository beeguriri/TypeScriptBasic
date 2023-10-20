interface User {
    age: number;
    name: string;
}

//변수에 인터페이스 활용
let user1: User = {
    age: 10,
    name: 'hello'
};


//함수에 인터페이스 활용
function getUSer(user: User):void {
    console.log(user);
}

getUSer(user1);


//함수의 스펙에 인터페이스를 활용
interface sumFunction {
    (a: number, b: number): number;
}

let sum: sumFunction;
sum = function(a: number, b: number): number {
    return a + b;
}


//인덱싱
interface stringArray {
    [index: number]: string;
    //stringArray[0] = 'hello';
}

let arr: stringArray = ['a', 'b', 'c'];
arr[0] = 'd';


//딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp; //제공되는 타입
}

let obj: StringRegexDictionary = {
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}


//인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person{
    // name: string;
    // age: number;
    language: string;
}

let captine: Developer = {
    name: 'captine',
    age: 30,
    language: 'english'
}