const arr = ['c++', 'c#', 'js', 'swift', 'python', 'java', 'pascal', 'ruby', 'cotlin', 'skala']
let accumulator = []

for(i = 0; i < arr.length; i++) {
    if(arr[i].length > 3) {
        accumulator.push(arr[i])
    }
}

console.log(accumulator)