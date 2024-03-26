console.log('#1. JavaScript homework example file')

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */
var myNum = 10 // variable name: myNum, value: 10
var myStr = 'some string' // variable name: myStr, value: 'some string'
var myBool = true // variable name: myBool, value: true
var myArr = [1, 2, 3, 4, 5] // variable name: myArr, value: 1, 2, 3, 4, 5
var myObj = {
  first: 'First Name',
  last: 'Last Name'
} // name of the variable myObj, value: first: 'First Name', last: 'Last Name'

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
var decimal2 = myNum.toFixed(2)
console.log('decimal2:', decimal2)
