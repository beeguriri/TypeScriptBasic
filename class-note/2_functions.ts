//파라미터의 타입 정의
function sum(a: number, b: number) {
    return a + b;
}

sum(10, 20);

// 함수 반환 값 타입 정의
function add(): number {
    return 10;
}

function add2(): void {
}

// 함수의 옵셔널 파라미터
// 특정 파라미터를 선택적으로 쓰고 싶을 때 '?' 사용
function log(a: string, b?: string, c?: string) {
}

log('hello');
log('hello', 'hi');
log('hello', 'ts', 'welcome');