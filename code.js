//a function to play craps on my index page
function playCraps() {
    console.log("playCraps() started");
    //step one-roll 2 six sided dice
    var die1;
    var die2;
    die1 = Math.ceil(6 * Math.random());
    die2 = Math.ceil(6 * Math.random());
    console.log("die1 is" + die1);
    console.log("die2 is" + die2);
    //step 1b print results on screen
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    //step two-calculate the sum of die 1 and 2
    var diceSum = die1 + die2;
    console.log("The sum of the dice is:" + diceSum);
    document.getElementById("diceSum").innerHTML = diceSum;
    //step three- does the sum equal 7 or 11, meaning are you a loser
    if (diceSum == 7 || diceSum == 11) {
        document.getElementById("gameRes").innerHTML = "Ha ha! You lose!";
    }else if (die1 == die2 && die1 % 2 == 0) {
        //step four-did the dice come up double, are they even, if so, you win
        document.getElementById("gameRes").innerHTML = "You Win! Great Job!";
    }else{
        //step five-otherwise push}
        document.getElementById("gameRes").innerHTML =
            "You did not lose, but you did not win. Please play again";
    }
}

//checkCreds function for strings.html
function checkCreds(){
    console.log("checkCreds() started...")
    document.getElementById("loginStatus").innerHTML = "Status of Login";
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;
    var zipCodeNumb;

    //this will place the characters under the fName id in the firstName variable
    firstName = document.getElementById("fName").value;
    console.log("the first name is inputted as " + firstName);

    lastName = document.getElementById("lName").value;
    console.log("the last name is inputted as " + lastName);

    zipCode = document.getElementById("zipCode").value;
    console.log("the zip code is inputted as " + zipCode);

    fullName = firstName + " " + lastName;
    console.log("The full name is " + fullName);

    fullNameLength = fullName.length;
    console.log("The full name has " + fullNameLength + " characters");

    zipCodeNumb = parseInt(zipCode);
    console.log("The zip code number is " + zipCodeNumb);

    if(fullNameLength > 20){
        document.getElementById("loginStatus").innerHTML = "Invalid name, please try again";
    } else if(zipCode.length != 5 || zipCpdeNumb > 99999 || zipCodeNumb < 0){
        document.getElementById("loginStatus").innerHTML = "Invalid zip code, please try again";
    } else{
        alert("User credentials passed, welcome to the site, " + fullName);
    }

}

function startFun(){
    console.log("startFun() started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
   document.getElementById("mymarquee").start();
}

function stopFun(){
    console.log("stopFun() started");
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
    document.getElementById("mymarquee").stop();
}

function checkPalin(){
    //check to see if a sentence is a palindrome
    console.log("checkPalin() started");

// extract the entered text to a string variable called entStr
var entStr;
entStr = document.getElementById("palinInput").value;
console.log("The text entered is: " + entStr);

//remove spaces from the text
var entStrNoSpace = entStr.split(" ").join("");
console.log("no spaces = " + entStrNoSpace);

//create a new variable called revStr and stor the entered string reversed here
var revStr;
const revArray = [];
length = entStrNoSpace.length;
console.log("string length = " + length);
for(let i = length; i >=0; i--){
    revArray.push(entStrNoSpace[i]);
}
revStr = revArray.join("");
console.log("reversed is: " + revStr);

//compare entStr to revStr
var equal = 0;
equal = (entStrNoSpace === revStr);
console.log(equal);

//give notice of equality status
if (equal == true){
    document.getElementById("palinStatus").innerHTML = entStr + " <h2>is</h2> a Palindrome!"
}else{
    document.getElementById("palinStatus").innerHTML = entStr + " <h2>is not</h2> a Palindrome!"

}

}

function playRain(){
    console.log("Rain Started");
    mySound = new sound("rainsounds.mp3");
    mySound.play();
}

function sound(srcFile){
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

function playrorSong(){
    console.log("Risk of Rain Started");
    mySound2 = new sound("rorSong.mp3");
    mySound2.play();
}

function sound(srcFile){
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}
function checkAns(){
    console.log("checkAns() started");

var ansStr;
ansStr = document.getElementById("ansInput").value;
if (ansStr == "Risk of Rain 2"){


    document.getElementById("ansStatus").innerHTML = " Correct!"
}else{
    document.getElementById("ansStatus").innerHTML = " Incorrect"

}

}

