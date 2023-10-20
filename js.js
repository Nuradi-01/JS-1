/* 1 Создать константу с любым числовым значением. 
Если значение константы меньше 10,
 то вывести в консоль текст “константа меньше 10”, 
иначе вывести “константа не меньше 10”;*/

// const a = +prompt("Пишите число чтобы узнать Констант больше или меньше");
// if (a>10) {
//     console.log("Const Больше");
// }else if(a===10){
//     console.log("Const равно 10 :)");
// }else{
//     console.log("Const меншье");
// }


/* 2 Создать переменную text c любым текстовым значением. 
Написать код, который если переменная text равна “lorem” выведет в консоль “У вас ошибка в тексте”, иначе выведет в консоль
 “Содержимое переменной: ***” - где вместо звездочек должно быть содержимое переменной. */


 // let text = "lorem";
// if (text==="lorem") {
//     console.log(text);
// }else{
//     console.log("У вас ошибка в тексте", text);
// }


/* 3 Создать переменную comment с произвольным текстом. 
Если текст больше 120 символов, вывести в консоль сообщение «Текст слишком длинный. 
В нем ## символов» (вместо решеток кол-во) символов. Иначе, вывести текст в консоль. 
***(Для этого задания нужно самостоятельно узнать как получить кол-во символов текста) */

// let comment = "Lorem Ipsum i tak dalee ";
// if (comment.length>120) {
//     console.log("Тескт слишком длинный");
// }else{
//     console.log(comment);
// }

/* 4 Создать переменную cartSum где хранится число( как будто общая цена товаров в корзине). 
Если значение cartSum больше или равно 5000, сделать скидку в 5% и вывести в консоль «Ваша скидка 5%. 
Итого: сумма. Доставка бесплатно», где вместо  сумма будет значение со скидкой. Если cartSum меньше 5000, то вывести в консоль: «Итого к оплате: значение переменной  cartSum. 
До скидки осталось: число оставшееся, чтобы cartSum стал 5000 */

// let cartSum = 5000;
// let skid = 0.05;
// if (cartSum>=5000) {
//     console.log(`Ваша скидка 5%. Итог скидки:${skid*cartSum}. Доставка бесплатно`);
// }else if(cartSum<5000){
//     console.log(`Итого к оплате: ${cartSum}. До скидки осталось: ${5000-cartSum}`);
// }

/* 1) Создайте функцию, 
которая принимает один параметр - число, и возвращает сообщение 
четное оно или нечетное. */

// function f(num) {
//     if (num%2==0) {
//         return "Четное";
//     }return "Не четное";
// }
/* 2) Создайте функцию, которая принимает 3 числа и возвращает 
наибольшее (не используя Math.max() */

// function f(a,b,c) {
//     if (a>b && a>c) {
//         return a
//     }else if(b>a&&b>c){
//         return b;
//     }return c;
// }

/* Создайте функцию x, которая принимает два числовых параметра 
из которых первый - это цена, 
а второй размер скидки. Функция должна вернуть сумму 
с применением скидки. */

// function x(a,b) {
//     return a*b/100;
// }

// console.log(x(15000,20));
/* 4 Создай функцию, которая принимает в первом параметре текст, а во втором число. 
Если количество символов в тексте меньше, чем введенное число, функция должна вернуть “Ошибка, слишком маленький текст”. 
 Иначе она возвращает указаное во втором параметре число символов.  */

// function f(text,num) {
//     if (text.length<num) {
//         return "Ошибка слишком мальенкий текст";
//     }return text.substr(0,num);
// }
// console.log(f("lorem ipsum",7));




// let a = ['lorem',123, true, 'ipsum'];

// a.pop();
// a.shift();
// console.log(a.length);
// console.log(a);

// let em = [];
// em = ['lorem'];
// em.unshift('add first','element');
// em.push("dollar",true);

// em.unshift(false,122)

// em.shift();
// em.pop();
// em.pop();

// console.log(em);

// for (let i = 0; i <= 1000; i++) {
//     console.log(i);
    
// }

// let x = ['html','css','js','react'];

// x.push(+prompt()); //+ если добавляешь числа
// for (let i = 0; i < x.length; i++) {
//     console.log(x[i]);
    
// }

// let arr = [10,123,13,481,1931];// Вывести сумму элементов массива,

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum +=arr[i];
// }

// console.log(sum); 

//Вывести элементы вложенного массива, к примеру “js”, “css”, “mysql”.

// let arr = ['frontend',['js','html', 'css'],'react',['node js', 'mysql'],'php'];

// console.log(arr[1][0], arr[1][2],arr[3][1]);


// let arr = ['frontend',['js','html', 'css'],'react',['node js', 'mysql'],'php'];
 

// for (let i = 0; i < arr.length; i++) {
//    if (typeof arr[i]==='object') {
//     for (let j = 0; j < arr[i].length; j++) {
//        console.log(arr[i][j]);
        
//     }
//    }else{
//     console.log(arr[i]);
//    }
    
// }
//forEach Вывести в консоль только нечетные числа
// let ar = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];

// ar.forEach(function (i) {
//     if (i%2===1) {
//         console.log(i);
//     }
// });
//Вывести в консоль элементы у которых кол-во символов не больше 4-х
// let arr = ['lorem ipsum',"javascript","php", "css","raect","git","html","mysql"];

// arr.forEach(function (item,inx) {
//   if (item.length<4) {
//     console.log(item);
//   }
     
// });


//FILTER

// Создайте новый массив в котором останутся только отрицательные элементы. 

// let arr = [1, -3, 5, 6, -7, 8, 9, -11];

// newArr = arr.filter(function (item,inx) {
//     return item<0;
// });

// console.log(newArr);

//Создать новый в котором будут только четные элементы этого массива.

// let arr = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];

// newArr = arr.filter(function (item) {
//     return item%2===0;
// });
// console.log(newArr);

//создать новый массив состоящий только из элементов у которых длина строки не равна 3-м. 

// let arr = ['lorem ipsum',"javascript","php", "css","raect","git","html","mysql"];

// newArr = arr.filter(function (i) {
//     return i.length!=3;
// });

// console.log(newArr);

//MAP

//Cделайте из него массив состоящий из квадратов этих числе.

// let arr = [5, 6, 7, 8, 9];

// let newArr = arr.map( (item) => {
//     return item*item;
// });
// console.log(newArr);

//Создать новый массив элементами которого буду сумма свойств объекта. Должно получится [15, 42, 186]

// let arr = [{a:10,b:5}, {a:20,b:22}, {a:131,b:55},];

// let newArr = arr.map( (item) => {
//     return item.a+item.b;
// });

// console.log(newArr);

//Reduce Дан массив [-13, 0, 12, 1662, -0.32, -102, -2]. Посчитать сумму отрицательных элементов. (Нужно будет использовать filter и reduce)

// let arr = [-13, 0, 12, 1662, -0.32, -102, -2];
// let newArr =arr.filter((i)=>{
//     return i<0;
// })
// let aa = newArr.reduce((s,elem)=>{
//     return s+elem;
// });
// console.log(aa);

//посчитать сумму свойств х всех объектов.
// let arr = [{x:10, y:'lorem'},{x:21, y:'lorem'},{x:-17, y:'lorem'},{x:156, y:'lorem'}];

// let newArr = arr.reduce((sum,item)=>{return sum+item.x},0);

// console.log(newArr);
//__________________________________________________________________________________________


// let arr_1 = [101, 202, 303, 404, 505];

// let arr_2 = [606, 707, 808, 909];

// let superArr = [...arr_1,...arr_2];

// let obj = {
//     with:300,
//     heigth:550,
// };

// let obj_2 = {...obj,area:() => {
//     return obj.with+obj.heigth;
// }};
// console.log(obj_2.area());

// function f(...rest) {
//     let retsul = rest.reduce((sum,item) => {
//         return sum+item;
//     },0);
//     return retsul
// };

// console.log(f(10,15,25,740,45,546,1566,));





// 4 ветка
// let man = {
//     name: "Adam",
//     surname: "Adamov",
//     age:25,
//     rost: 1.81,
//     ves: 80,
//     login: "admin",
//     password: "admin95",
//     money: 10000,
//     getIMT: function () {  return man.ves / (man.rost * man.rost);},
//     imtResult: function (x) {
//         if (x<=18) {
//             return "Недостаточный вес";
//         }else if(x<=25){
//             return "Вес в норме";
//         }else if(x<=29){
//             return "Избыточный вес";
//         }else if(x>29){
//             return "Ожирение";
//         }
//     },
//     givMoney:function (sum) {
//         if (sum<=5000) {
//             return `Хьаэца хьай ${sum}. Соьгахь диснаг х1ар ду:  ${man.money-sum}. Сих хьадалахь`
//         }return "Делахь, сайгах дац са оццал ахч"
//     },
//     lotteryNum:555,

// };






// function lotteRondom(max,min){
// return Math.floor (Math.random () * (max - min + 1)) + min;
// } 
// let lottery = lotteRondom(0,1000);

// if (lottery===man.lotteryNum) {

//     alert('поздравляем вы выиграли!')

//     man.money = `1000.0000`; 
    
//     }else{
//         console.log(`Вы проиграли, попробуйте еще раз,  номер ${lottery}`);
//     }



// man.live = {
//     city: "Grozny",
//     street: "Trosheva",
//     house: 43,
// };



// let a = "admin95";

// if(a===man.password){
//     console.log(`Добро пожаловать, ${man.name}.  Ваш логин ${man.login}`);
// }else{
//     console.log(`Указанный пароль ${a} не верен. Попробуйте еще раз`);
// }




