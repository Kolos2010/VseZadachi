const name = 'Максим';
const job = 'Front-End разработчик';
console.log(name + ' ' + job);
console.log(`${name} ${job}`)

const t1 = 'Колосов Вячеслав';
const t2 = 'JavaScript';
const t3 = 'Чеботов Никита Михайлович';
const t4 = 'Хочу усвоить полезную профессию';
const t5 = '1 год';

console.log('Всем привет! Меня зовут ' + t1 + ' ' + 'Сейчас я изучаю язык программирования \n' + t2 + ' ' + 
'на курсе по ' + t2 + ' '+ 'у '+ t3 + '\n\n'+
'Я хочу стать веб-разработчиком, потому-что ' + t4 + '. '+ 'До этого я изучал\n'+ t2 + ' ' + t5 + ' Я уверен, что пройду курс\nдо конца' );
console.log(`Всем привет! Меня зовут ${t1} Сейчас я изучаю язык программирования
${t2} на курсе по ${t2} у  ${t3} \n
Я хочу стать веб-разработчиком, потому-что ${t4}. До этого я изучал
${t5} Я уверен, что пройду курс\nдо конца`);

let myInfoText = `Всем привет! Меня зовут ${t1} Сейчас я изучаю язык программирования
${t2} на курсе по ${t2} у  ${t3} \n
Я хочу стать веб-разработчиком, потому-что ${t4}. До этого я изучал
${t5} Я уверен, что пройду курс\nдо конца`;

let myIndoText1 = myInfoText.replaceAll("JavaScript", "JAVASCRIPT" );
console.log(myIndoText1);
let myIndoText2 = myIndoText1.length;
console.log(myIndoText2);

let firstLetter = myIndoText1[0];
let lastLetter = myIndoText1[myIndoText1.length - 1];

console.log("Первая буква строки:", firstLetter);
console.log("Последняя буква строки:", lastLetter);

let userName = prompt('Введите имя');
let userNameLower = userName.toLowerCase();
let userNameTrim =  userNameLower.trim();

let userAge = prompt("Cколько полных лет");
let userAgeTrim = Number(userAge.trim());

console.log(`Вас зовут ${userNameTrim}`);
console.log(`Лет: ${userAgeTrim}`);

let inputString = prompt("Введите строку:");
let start = parseInt(prompt("Введите начальную позицию обрезки:"));
let end = parseInt(prompt("Введите конечную позицию обрезки:"));

let result = inputString.slice(start, end);

console.log("Результат обрезки строки:", result);

let userText = prompt("Введите строку:");
let wordFromText = userText.indexOf(prompt('Введите слово'));

console.log(wordFromText); 



