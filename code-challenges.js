// April Rieger ------ ASSESSMENT 6: Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee.

//create a function that takes an array of Objects as an arguement
const loveObjects = (array) => {
	//create a local variable to map through the value of the objects in the array
  let firstLetterCapped = array.map(value => {
  	//split the individual names into an array of substrings
    let individualName = value.name.split(" ")
    //return the varibale when we have mapped through the value of the individual name and capitalize the value at substring 1 which is the first character of each individual name, join it back together and concat the string interpolation to the end
    return individualName.map(value => value.charAt(0).toUpperCase() + value.substring(1)).join(" ") + ` is a ${value.occupation}.`
  })
  //return the variable with .join since they are all in an individual array and the expected outcome is a single sentence.
  return firstLetterCapped.join(" ")
}
console.log(loveObjects(people))

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

//create a function that takes in an array of mixed data
const funWithArraysNot = (array) => {
	//sort the data to exclude anything but numbers into a new array
	let onlyNums = array.filter(value => typeof(value) === "number")
	//return the varibale when we mapped through the value
	return onlyNums.map(value => { 
		//return the valu%3 into a new array
		return value%3
	})
}
console.log(funWithArraysNot(testingArray1))
console.log(funWithArraysNot(testingArray2))

// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

//create a function that takes in two arrays as an arguement
const moreFunWithArraysNot = (array1, array2) => {
  //create a new varibale that will join the two arrays
  let newArray = array1.concat(array2)
  //filter through the combined array with the value and index as arguements
  return newArray.filter((value, index) => {
    //and exclude the value is it is a duplicate by comparing the index of value and index
      return newArray.indexOf(value) === index
  })
}
console.log(moreFunWithArraysNot(testingArray3, testingArray4))