//Сортировка массива
function quickSort (firstNum, lastNum) {
   var numFirstElem = firstNum;
   var numLastElem = lastNum;
   var numMainElem = (numLastElem + numFirstElem) / 2;
   numMainElem = parseInt(numMainElem);
   var mainElem = arr[numMainElem];
   
   while (numLastElem > numFirstElem) {
      while (arr[numFirstElem] < mainElem) {
         numFirstElem++;
      }
      while (arr[numLastElem] > mainElem) {
         numLastElem--;
      }
      if (numFirstElem <= numLastElem) {
            console.log("Меняем " + arr[numFirstElem] + " и " + arr[numLastElem] + ",");
         var tmp = arr[numFirstElem];
         arr[numFirstElem] = arr[numLastElem];
         arr[numLastElem] = tmp;
         numFirstElem++;
         numLastElem--;
            console.log("получаем массив:");
            console.log(arr); //Измененный массив
      }
   }

   if (numLastElem > firstNum) {
      quickSort (firstNum, numLastElem);
   }
   
   if (numFirstElem < lastNum) {
      quickSort (numFirstElem, lastNum);
   }
   
   return arr;
}



//Наполнение массива
var arrLenth = prompt("Укажите количество элементов массива", "");
arrLenth = Number(arrLenth);

var arr = [];
for (var i = 0; i < arrLenth; i++) {
   arr[i] = Number(prompt("Введите элемент массива", ""));
}

console.log("Исходный массив:");
console.log(arr);

//Запуск сортировки и выведение отсортированного массива
var newArr = quickSort(0, arrLenth - 1);
console.log("Отсортированный массив:");
console.log(newArr);