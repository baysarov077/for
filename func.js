const arr = [1, 2, -3, 4, -5, 6, 7]

let func = (arr) => {
    let sum = 0
    for(i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}
console.log(func(arr))

const greet = (arr) => {
    let sum = 0
    for(i = 0; i < arr.length; i++){
        if(arr[i] > 0) {
            sum += arr[i]
        }
    }
    return sum
}
console.log(greet(arr))

const newArr = ['c++', 'c#', 'js', 'swift', 'python', 'java', 'pascal', 'ruby', 'cotlin', 'skala']


const progLang = (newArr) => {
    let all = []
    for(i = 0; i < newArr.length; i++) {
        if(newArr[i].length > 3) {
             all.push(newArr[i])
        }
    }
    return all
}
console.log(progLang(newArr))

const names = ['Адам', 'Адлан', 'Рамзан', 'Увайс','Мухьаммад','Ансар','Дени']


const aOrUStartNames = (names) => {
    const newNames = []
    for(i = 0; i < names.length; i++) {
        if(names[i][0] === 'А' || names[i][0] === 'У'){
            newNames.push(names[i])
        }

    }
    return newNames
}

console.log(aOrUStartNames(names))

function deleteMessages(array) {
    const nonTrue = []
    for(i = 0; i < messages.length; i++){
        if(!messages[i].deleted) {
            nonTrue.push(messages[i])
        }
    }
    return nonTrue
  }
  
  const messages = [
   { text: 'hello', deleted: true },
   { text: 'bue', deleted: false },
   { text: 'js is a beauty', deleted: false },
   { text: 'pair programming', deleted: true },
   { text: 'this is my horse', deleted: false },
  ];
  
  console.log(deleteMessages(messages))

