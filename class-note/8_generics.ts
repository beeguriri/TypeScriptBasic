//함수를 호출 할 때 파라미터에 대한 타입을 지정하면서 넘김
function logText<T>(text:T):T {
    console.log(text);
    return text;
}

//호출하는 시점에 타입을 지정
logText<string>('hello');
logText<number>(10);


//인터페이스에 제네릭을 선언하는 방법
interface Dropdown<T> {
    value: T;
    selected: boolean;
}

const obj1: Dropdown<number> = {value: 10, selected: true};
const obj2: Dropdown<string> = {value: 'abc', selected: true};


//제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
    text.forEach((text) => {
        console.log(text);
    });
    return text;
}

logTextLength<string>(['hi', 'hello']);


//제네릭의 타입제한 2 : 정의 된 타입 이용하기
interface LengthType {
    length: number;
}

function logTextLength2<T extends LengthType>(text: T): T {
    console.log(text.length);
    return text;
}

logTextLength2('a');
logTextLength2({length: 10});

// 숫자는 length 가 내부속성으로 제공되지 않기 때문에
//Argument of type 'number' is not assignable to parameter of type 'LengthType' 에러 뜸
// logTextLength2(10); 


//제네릭의 타입 제한 3 : keyOf
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

//name, price, stock 중 하나의 key값만 들어갈 수 있음
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');


//keyof 를 쓰면 name, price, stock 중 하나만 들어갈 수 있음
// getShoppingItemOption<ShoppingItem>({name: 'aa', price: 10, stock: 10});
// getShoppingItemOption({name: 'aa', price: 10, stock: 10});
getShoppingItemOption('name'); //key값 들만 들어갈 수 있음
