// 하나 이상의 타입을 쓸 수 있는 유니온 타입 '|'
function logMessage(value: string | number) {

    if(typeof value === 'number') {
        //number에 관련 된 api, 속성들을 사용할 수 있음
    } else {
        //string에 관련 된 api, 속성들을 사용할 수 있음
    }

    //해당 타입이 아닐 때 예외 처리
    throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(10);

interface Developer1 {
    name: string;
    skill: string;
}

interface Person1 {
    name: string;
    age: number;
}

function askSomeone(someone: Developer1 | Person1) {

    //공통 속성만 접근할 수 있음
    someone.name;

    //타입 가드 : 특정 속성으로 제한 한 후 해당 속성 사용할 수 있음.
}


//인터섹션 타입 '&'
function askSomeone2(someone: Developer1 & Person1) {

    //모든 속성 접근할 수 있음
    someone.name;
    someone.age;
    someone.skill;
}

// union
askSomeone({name: 'developer', skill: 'ts'});
askSomeone({name: 'person', age: 100});

//intersection
askSomeone2({name: 'who', skill: 'web', age: 30});