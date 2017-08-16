//Сортировка массива
function quickSort (myArr, firstNum, lastNum) {
   var numFirstElem = firstNum;
   var numLastElem = lastNum;
   var numMainElem = (numLastElem + numFirstElem) / 2;
   numMainElem = parseInt(numMainElem);
   var mainElem = myArr[numMainElem];
   
   while (numLastElem > numFirstElem) {
      while (myArr[numFirstElem] < mainElem) {
         numFirstElem++;
      }
      while (myArr[numLastElem] > mainElem) {
         numLastElem--;
      }
      if (numFirstElem <= numLastElem) {
            console.log("Меняем " + myArr[numFirstElem] + " и " + myArr[numLastElem] + ",");
         var tmp = myArr[numFirstElem];
         myArr[numFirstElem] = myArr[numLastElem];
         myArr[numLastElem] = tmp;
         numFirstElem++;
         numLastElem--;
            console.log("получаем массив:");
            console.log(myArr); //Измененный массив
      } 
   }

   if (numLastElem > firstNum) {
      quickSort (myArr, firstNum, numLastElem);
   }
   
   if (numFirstElem < lastNum) {
      quickSort (myArr, numFirstElem, lastNum);
   }
   
   return myArr;
}



//Наполнение массива
var arrLenth = prompt("Укажите количество элементов массива", "");
arrLenth = Number(arrLenth);

var arr = [];
for (var i = 0; i < arrLenth; i++) {
   //Случайные числа от 1 до 50
   arr[i] = Math.floor(Math.random() * 50) + 1;
}

console.log("Исходный массив:");
console.log(arr);

//Запуск сортировки и выведение отсортированного массива
var newArr = quickSort(arr, 0, arrLenth - 1);
console.log("Отсортированный массив:");
console.log(newArr);