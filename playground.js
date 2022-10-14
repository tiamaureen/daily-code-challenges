//*Coding Challenge #2

// Grasshopper - Personalized Message by danleavitt0 on CodeWars

// Description:

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:
// case 	              return
// name equals owner 	'Hello boss'
// otherwise 	        'Hello guest'

// function greet (name, owner) {
//   if (name === owner) {
//     return 'Hello boss'
//   } else {
//     return 'Hello guest'
//   }
// }

// function greet (name, owner) {
//   return name === owner ? 'Hello boss' : 'Hello guest'
// }

//*Coding Challenge #1

// The Feast of Many Beasts By MollyJeanB-pdx on CodeWars

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

// function feast(beast, dish) {
//   return beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1]
// }

// function feast(beast, dish) {
//   return beast.startsWith(dish[0]) && beast.endsWith(dish[dish.length-1])
// }