const arr = ['Alvi', 'Adam', 'Shamil','Rasul', 'Ibrahim', 'Sayfullah', 'Muhammad', 'Nasir', 'Deni', 'Sidik']

let accumulator = []
for(i = 0; i < arr.length; i++) {
    if(arr[i][0].toUpperCase() === 'A') {
        accumulator.push(arr[i])
    }
}
console.log(accumulator)