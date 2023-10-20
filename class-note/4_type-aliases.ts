interface Person1 {
    name: string;
    age: number;
}

type Person2 = {
    name: string;
    age: number;
}

//인터페이스를 이용한 정의
let person1: Person1 = {
    name: 'p1',
    age: 30
}

//타입별칭을 이용한 정의
//마우스 호버 시 프리뷰로 구조 볼 수 있음
let person2: Person2 = {
    name: 'p1',
    age: 30
}

type Todo = {id: string; title: string; done: boolean};
function getTodo(todo: Todo): void {
}