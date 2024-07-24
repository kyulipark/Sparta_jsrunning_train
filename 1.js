1. let uninitialized;
console.log(uninitialized); // 결과값 <undefined>, let 변수선언이다.


2. < const > apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable //<const>, 재선언 불가하기 때문이다.


3. let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 >, 0부터 세어지기 때문이다.


4. 
let mySchedule = "";
console.log(mySchedule || false); // < fales>, 값이 할당되지 않으면 기본적으로 false이고 or fales서.
console.log(!!mySchedule); // < false >, !!2번은 반대가 두번되어 변하지 않았다(?), false-true-false
