enum Shoes {
    //별도 초기화 하지 않으면 0부터 1씩 증가하는 숫자형 enum
    Nike = 'nike',
    Adidas = 'adidas'
}

let myShoes = Shoes.Nike;
console.log(myShoes);   //'nike'


enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: Answer) {

    if(answer === Answer.Yes)
        console.log('정답');
    else if (answer === Answer.No)
        console.log('오답');
}

//enum에서 제공하는 데이터만 파라미터로 넣을 수 있음.
askQuestion(Answer.Yes);
// askQuestion('Yes');