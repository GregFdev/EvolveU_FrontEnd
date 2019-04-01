// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const arrayNew2 = [];
array.forEach((num) => {
  num.username += "!";
  arrayNew2.push(num);
})




//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray = array.map(item => {
  item.team += "est";
  return item;
  })

const mapArray10 = array.map(item => {
  item.team += "est"; 
  return item;
})

//Filter the array to only include users who are on team: red
const filterArray = array.filter(user => user.team === "red");
console.log(filterArray);

const filterArray3 = array.filter(user => user.team === "red" || user.score > 9);
console.log(filterArray);

//Find out the total score of all users using reduce

const totScore = array.reduce((cumScore, user) => {
  console.log(cumScore);
  return cumScore + user.score;
}, 0);
console.log(totScore);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	// console.log(num, i);
	// alert(num);
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
let mapArrayF = array.map(user => {
  user.items = user.items.map(obj => {
    // console.log("current object = ", obj);
    obj += "?";
    // console.log("new object = ", obj);
    return obj;
    })
  console.log(user.items);
  return user;
})
console.log(mapArrayF);
// you must be assigning the map function to an object 
// i.e. user.items  so the return has something to return to.  

