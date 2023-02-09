<!--Дана строка с символами, превратить символы нижнего регистра в верхний, если символ в верхнем регистре, его не трогать-->
let string ="heKa, seT";
console.log(string.toUpperCase());

<!--Задан массив чисел, найти сумму всех чет чисел-->
let arr = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
for (let i=0; i < arr.length; i++){
  if (arr[i] % 2 == 0){
      sum += arr[i];
  }
}
console.log(sum);

<!--Задан массив чисел, среди четных чисел заменить нечетные на отрицательные-->
let arr = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i <  arr.length; i++){
    if(arr[i]%2) continue;
    arr.splice(i,0, -i);
}
console.log(arr);

<!--Вводятся 2 числа найти ближайшие к числу 100-->

let num1 = 13.4;
let num2 = 100;
let num3 = -40;
let result = Math.max(num1, Math.min(num2, num3));
console.log(result);

<!--Даны делимое и делитель проверить делится ли без остатка, то true, если с остатком, то false, вывести остаток от деления-->
let a = 3;
let b = 2;
let result = a % b;
if (result != 0) {
 console.log('false ' + result);
} else {
 console.log('true ');
}
