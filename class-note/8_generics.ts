//함수를 호출 할 때 파라미터에 대한 타입을 지정하면서 넘김
function logText<T>(text:T):T {
    console.log(text);
    return text;
}

//호출하는 시점에 타입을 지정
logText<string>('hello');
logText<number>(10);

