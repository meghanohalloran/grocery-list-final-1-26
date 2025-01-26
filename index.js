const groceryList = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 2, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 3, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 4, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 6, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 7, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 8, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];

fruitsArray = ["apple", "banana","orange", "broccoli", "milk", "cheddar", "sourdough"
]

for(let i = 0; i < fruitsArray.length; i++){
  console.log(fruitsArray[i]);

}

var array = ["apple", "banana","orange", "broccoli", "milk", "cheddar", "sourdough"];

var toUpperCase = array.map(function(name) { return name.toUpperCase(); });
console.log(toUpperCase);


const items = [
  {id:1, item: "apple"}, {id:2, item: "banana"}, {id:3, item: "orange"}, {id:4, item: "broccoli"}, {id:5, item: "milk"}, {id:6, item: "cheddar"}, {id:7, item: "sourdough"}];

const foundItem = findItemById(item, id);


console.log(foundItem);









// logNames => Takes in an array of items and console.logs the name of each item in the given array. Hint: use .forEach
// 
// getUpperCaseNames => Takes in an array of items and returns an array of item names in all uppercase. Hint: use .map
// 
// getItemById => Takes in an array of items and an id. Returns the item in the array with the given id. Hint: use .find
// 
// getItemPriceByName => Takes in an array of items and a name string. Returns the price of the item that matches the name that was passed in. Hint: use a loop
// 
// getItemsByCategory => Takes in an array of items and a category string. Returns an array of items that belong to the given `category`. Hint: use .filter 
// 
// countItems => Takes in an array of items and returns the total quantity of all items. Hint: use .reduce
// 
// calculateTotalPrice => Takes in an array of items and returns the cost of all given items. Hint: use .reduce
// 
// !!!!!!!!!!!Don't forget to console log as you go and test out each function!!!!!!!!!
// Push to GitHub

// // function logNames(name){
// //   console.log(name);
// // }
// // names.forEach(logNames);

