'use strict';

/*First I will ask the user their name and if they give me their name with their first letter as lower case, it will make their name capitalized*/
var numCorrect = 0;
var userName = prompt('First, I\'d like to get to know you, what is your name?');
console.log(userName);
var firstLetterInName = userName.charAt(0);
console.log(firstLetterInName);

if (firstLetterInName === firstLetterInName.toLowerCase()) {
  firstLetterInName = firstLetterInName.toUpperCase();
  userName = userName.replace(userName.charAt(0), firstLetterInName);
}
console.log(firstLetterInName);
console.log(userName);

/*this will display there name*/
alert('Hello ' + userName + '!!  Thanks for learning about me!');

/*I will ask for my favorite sport and return them a response to their answer */
var favoriteSport = prompt('What is my favorite sport?');
console.log('Gregs favorite sport is:', favoriteSport);

if (favoriteSport === 'soccer') {
  alert('you got it!  Good guess!.');
  numCorrect++;
} else if (favoriteSport === 'basketball'){
  alert(favoriteSport + ' is my 2nd favorite, close guess, but my favorite is soccer!');
} else {
  alert('Good guess, but my favorite sport is actually Soccer');
}

var numCats = prompt('How many cats do I have?');
console.log('Greg has this many cats:', numCats);

if (numCats === '2') {
  alert('Yes, ' + userName + ' and they are both awesome!');
  numCorrect++;
} else {
  alert('Whoops, you should have said 2. ' + 'but it\'s ok ' + userName);
}

var favoriteActor = prompt('Who is your favorite actor or actress?');
var favoriteActorCaps = favoriteActor.toUpperCase();
alert(favoriteActorCaps + ' IS MY FAVORITE ALSO, NO WAY!!');

var laCroix = prompt('Are you addicted to La Croix like me?');
console.log('addicted?:', laCroix);

if (laCroix === 'y' || laCroix === 'yes') {
  alert('Dude, me too...  It\'s so good');
  numCorrect++;
} else {
  alert('You are missing out, ' + userName + '.');
}

var howOldAmI = prompt('How old do you think I am?');
console.log('thinks I am:', howOldAmI);

if (parseInt(howOldAmI) <= 34){
  alert('I am not that young');
} else if (parseInt(howOldAmI) === 35) {
  alert('DING DING DING!!');
  numCorrect++;
} else {
  alert('You think I am a geezer, not cool ' + userName);
}

var myCountries = ['Japan', 'Bahrain', 'Australia', 'Canada', 'Singapore', 'Thailand'];
var numGuesses = 6;
var keepGuessing = true;
var j = 0;
var i = 0;
for(i = 0; i < numGuesses && keepGuessing === true; i++) {
  var travelGuess.toLowerCase = prompt('Can you guess one country I have been to outside of the USA?');
  for (j = 0; j < myCountries.length && keepGuessing === true; j++) {
    if (travelGuess === myCountries[j]) {
      alert('Wow!  Nice guess!');
      keepGuessing = false;
    }
  }
}
if (keepGuessing === true) {
  alert('thanks for playing my guessing game!');
}
