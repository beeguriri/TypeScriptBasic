//최근에는 리액트에서도 훅 기반의 함수형 코드를 사용하므로
//잘 사용 안할 듯 함...

class Person {

    //클래스에서 사용하고자 하는 변수에 대해 미리 정의 해 줘야함
    //변수의 유효범위까지 설정 가능
    private name: string;
    public age: number;
    readonly log: string;   //읽기만 할 수 있는 필드
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}