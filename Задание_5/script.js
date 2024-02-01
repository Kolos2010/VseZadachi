//Задача1
// userLogin = 'TBU';
// userPassword = '12345678';

// exisUserLogin = String(prompt('Введите логин'));
// exisUserPassword = String(prompt('Введите пароль'));

// if((userLogin === exisUserLogin) && (userPassword === exisUserPassword )){       
//     alert('Вы вошли в систему');
// }
// else{
//     alert('Вы не вошли в систему');
// }


//Задача2
// let counter = 0;
// let question1 = prompt('Сколько будет 2 + 2?');
// let answer1 = 4;
// if(question1 == answer1){
//     alert("Верно");
//     counter++;
// }
// else{
//     alert("Неверно");
// }
// let question2 = prompt('Сколько будет 2 * 2?');
// let answer2 = 4;
// if(question2 == answer2){
//     alert("Верно");
//     counter++;
// }
// else{
//     alert("Неверно");
// }
// let question3 = prompt('У Пети было 5 яблок. 3 из них он съел, 1 он отдал другу. Сколько яблок у Пети осталось?');
// let answer3 = 1;
// if(question3 == answer3){
//     alert("Верно");
//     counter++;
// }
// else{
//     alert("Неверно");
// }
// let question4 = prompt('У Маши было 10 конфет 2 она съела, 1 она отдала другу. После мама дала еще 5 конфет. Сколько в итоге конфет осталось у Маши?');
// let answer4 = 12;
// if(question4 == answer4){
//     alert("Верно");
//     counter++;
// }
// else{
//     alert("Неверно");
// }
// let question5 = prompt('Сколько будет 2+2*2?');
// let answer5 = 6;
// if(question5 == answer5){
//     alert("Верно");
//     counter++;
// }
// else{
//     alert("Неверно");
// }
// alert(`Правильных ответов ${counter}`);



//Задача3
// if (confirm("Сказать привет?")) {
//     alert("Привет!");
//   } else {
//     alert("Вы нажали кнопку отмена");
//   }
// if (confirm("Поставьте 5")) {
//     alert("Спасибо");
//   } else {
//     alert("Ладно((((");
//   }


//Задача4
// for(let i = 0; i < 3; i+=1){
//     let newStudent = prompt('Введите имя нового сотрудника!');
//     newStudent = newStudent.trim();
//     if(newStudent){
//         alert(`Добро пожаловать, ${newStudent}!`);
//     }
// }

// let i = 0;
// while(i < 3){
//     let newStudent = prompt('Введите имя нового сотрудника!');
//     newStudent = newStudent.trim();
//     if(newStudent){
//         alert(`Добро пожаловать, ${newStudent}!`);
//     }
//     i++;
// }

// let i = 0;
// do{
//     let newStudent = prompt('Введите имя нового сотрудника!');
//     newStudent = newStudent.trim();
//     if(newStudent){
//         alert(`Добро пожаловать, ${newStudent}!`);
//     }
//     i++;
// }
// while(i < 3)



//Задача5

let counter = 0;
let summ = 0
for(let i = 0; i < 101; i+=1){
 summ += counter;
 counter++;
}
alert(summ);


//Задача6
let clientName = "Игорь";
let clientSpentForAllTime = 110;
let clientSpentToday = 25;
let discount = 0;

if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
    discount = 0.1; // 10% скидка
} else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
    discount = 0.2; // 20% скидка
} else if (clientSpentForAllTime >= 500) {
    discount = 0.3; // 30% скидка
}

let discountAmount = clientSpentToday * discount;
let totalAmount = clientSpentToday - discountAmount;

alert(`Сумма потраченная за сегодня ${totalAmount}$`);