console.log('#1. JavaScript homework example file')

/*
 * Завдання #1
 *
 * Створіть змінні наступних типів даних зі вказаними значеннями:
 * - число (number)
 * - рядок (string)
 * - булеве значення (boolean)
 * - масив (array)
 * - об'єкт (object)
 */
var myNum = 10 // змінна myNum типу number зі значенням 10
var myStr = 'some string' // змінна myStr типу string зі значенням 'some string'
var myBool = true // змінна myBool типу boolean зі значенням true
var myArr = [1, 2, 3, 4, 5] // змінна myArr типу array з елементами [1, 2, 3, 4, 5]
var myObj = {
  first: 'First Name',
  last: 'Last Name'
} // змінна myObj типу object з властивостями first та last

console.log('myNum: ', myNum)
console.log('myStr:', myStr)
console.log('myBool:', myBool)
console.log('myArr:', myArr)
console.log('myObj:', myObj)

/*
 * Завдання #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, 
 * щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */
var decimal2 = myNum.toFixed(2) // змінна decimal2 містить число myNum з 2 знаками після коми
console.log('decimal2:', decimal2)

/*
 * Завдання #3
 *
 * Створіть змінну myBigInt і запишіть в неї число 123n (тип BigInt).
 * Потім збільшіть його на 1 та запишіть результат в цю ж змінну.
 */
var myBigInt = 123n // змінна myBigInt типу BigInt зі значенням 123n
myBigInt = myBigInt + 1n // збільшення значення змінної myBigInt на 1n
console.log('myBigInt:', myBigInt)
