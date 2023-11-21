interface DropdownItem<T> {
    value: T;
    selected: boolean;
}

// interface Email {
//     value: string;
//     selected: boolean;
// }

// interface ProductNumber{
//     value: number;
//     selected: boolean;
// }

// const emails: {value:string, selected: boolean}[] = [
// const emails: Email[] = [
const emails: DropdownItem<string>[] = [
    {value: 'naver.com', selected: true},
    {value: 'google.com', selected: false},
    {value: 'kakao.com', selected: false},
];



// const numberOfProducts: {value:number, selected: boolean}[] = [
// const numberOfProducts: ProductNumber[] = [
const numberOfProducts: DropdownItem<number>[] = [
    {value: 1, selected: true},
    {value: 2, selected: false},
    {value: 3, selected: false},
];

//seclect box의 option tag 만들어 주는 메서드
// function createDropdownItem(item: Email | ProductNumber) {
function createDropdownItem(item: DropdownItem<string | number>) {
    const option = document.createElement('option');

    option.value = item.value.toString();
    option.innerText = item.value.toString();
    option.selected = item.selected;

    return option;
}

//드랍다운 아이템 추가
emails.forEach(function (email) {
    const item = createDropdownItem(email);
    const selectTag = document.querySelector('#email-dropdown');
    selectTag?.appendChild(item);
});

numberOfProducts.forEach(function(product) {
    const item = createDropdownItem(product);
    const selectTag = document.querySelector('#product-dropdown');
    selectTag?.appendChild(item);
});