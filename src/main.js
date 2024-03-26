console.log('#1. JavaScript homework example file')

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */
var myNum = 10 // змінна myNum зі значенням 10
var myStr = 'some string' // змінна myStr зі значенням 'some string'
var myBool = true // змінна myBool зі значенням true
var myArr = [1, 2, 3, 4, 5] // змінна myArr зі значенням масиву [1, 2, 3, 4, 5]
var myObj = {
  first: 'First Name',
  last: 'Last Name'
} // змінна myObj зі значенням об'єкту {first: 'First Name', last: 'Last Name'}

console.log('myNum: ', myNum)
console.log('myStr:', myStr)
console.log('myBool:', myBool)
console.log('myArr:', myArr)
console.log('myObj:', myObj)

/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */
var decimal2 = myNum.toFixed(2) // Форматування числа myNum збереженого в змінній myNum з 2 знаками після коми
console.log('decimal2:', decimal2)


/*
 * #3
 *
 * Створіть змінну myBigInt і запишіть в неї число 123n (BigInt).
 * Потім збільште його на 1 та запищіть в цю ж саму змінну.
 */
var myBigInt = 123n // Створення змінної myBigInt та присвоєння їй значення BigInt 123n
myBigInt = myBigInt + 1n // Збільшення значення myBigInt на 1n
console.log('myBigInt:', myBigInt)
