function checkOddEven() {
   
   num.value
   var input = num.value


   if (input % 2 == 0) {
      console.log("Even Number")
      display.innerHTML = "Even Number"
   } else if (input % 2 != 0){
      console.log('Odd Number')
      display.innerHTML = "Odd Number"
   } else {
      console.log('Error')
      display.innerHTML = "Error"
   }
   
}


function checkFizBuz() {
   numFiz.value
   var val = numFiz.value

   if (val%3 == 0 && val%5 == 0) {
      console.log("Fizz_Buzz")
      displayFizBiz.innerHTML = "Fizz_Buzz"
      // displayFizBiz.style.color = "green"
      // displayFizBiz.style.background = "whitesmoke"
   } else if (val%5 == 0) {
      console.log("Buzz")
      displayFizBiz.innerHTML = "Buzz"
      // displayFizBiz.style.color = "gold"
      //displayFizBiz.style.background = "whitesmoke"

   } else if (val%3 == 0) {
      console.log("Fizz")
      displayFizBiz.innerHTML = "Fizz"
      // displayFizBiz.style.color = "purple"
      // displayFizBiz.style.background = "whitesmoke"
   } else {
      displayFizBiz.innerHTML = "Error 401"
      displayFizBiz.style.color = "red"
      displayFizBiz.style.background = "white"
   }
   
}


new Date()
var date = new Date()
console.log(date)
timeDisplay.innerHTML = date
