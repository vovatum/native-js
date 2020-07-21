// function countAnimals(animals, count) {
//     return count.map(item => animals.match(new RegExp(item, 'g'))).map(item => item === null ? 0 : item.length)
// }

function countAnimals(animals,count){
    return count.map(animal => (animals.match(new RegExp(animal, "g")) || []).length);
}

console.log(countAnimals("dog,cat", ["dog", "cat"]))
// 1,1]);
console.log(countAnimals("dog,cat", ["dog", "cat", "pig"]))
// , [1,1,0]);
console.log(countAnimals("dog,dog,cat", ["dog", "cat"]))
// , [2,1]);
console.log(countAnimals("dog,dog,cat", ["pig", "cow"]))
// , [0,0]);
