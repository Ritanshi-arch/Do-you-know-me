var readlinesync = require("readline-sync")


console.log("Welcome to the quiz world of Ritanshi!... Share the screenshot of your score")
score = 0
console.log("_________")

var userName = readlinesync.question("May I know your good name ? ")
console.log("-------------")
console.log("Welcome " + userName + " , Nice pleasure to see you here. Participate in the QUIZ WORLD OF MINE. Wish you good luck ")
console.log("-----")

console.log("Special Note, kindly use lower letter otherwise your answer get wrong!")

function play(question, answer) {
  var userAnswer = readlinesync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Absolutely Correct!!!!! ")
    score = score + 1

  }
  else {
    console.log("Alaas!!!! ")

  }
  console.log(score)

}

play("what is my favourite color ? ", "black");
play("what is my favourite movie? ", "harry potter");
play("what is my favourite bike? ", "ninja");
play("what is my favourite game? ", "bgmi")
play("where do I live? ", "delhi")






console.log("-----------")
var answer1 = readlinesync.question("Who is my favourite person? ")
console.log(" YOU " + userName + " WILL ALWAYS BE MY FAVOURITE ")


console.log("---------")
console.log("your score final score is " + score)
console.log("I appreciate your involvement in this project")
