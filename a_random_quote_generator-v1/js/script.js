/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array - I grabbed 10 quotes from Clickhole's "They Said What?!" features, which is basically fake celebrity quotes.
 * I created an array of objects - the array is called ` quotes ` and there are 10 objects within it, each containing at least a quote and a source. Some have a citation and/or year property (the year is made up).
 * Each property within the objects is a string, except the year, which is a number.
***/

const quotes = [
  {
    quote: "I hated school. They looked me in the eyes and told me the three states of matter were solids, liquids, and gases as if Jello doesn't even exist.",
    source: "Samuel L. Jackson",
    citation: "Clickhole interview",
    year: 2014
  },
  {
    quote: "I don't consider it stealing unless you descend on a rope from the skylight and have to reach through a grid of infrared lasers.",
    source: "Katy Perry",
    citation: "Clickhole interview",
    year: 2019
  },
  {
    quote: "I always count sheep during the day so I don't have to remember to do that at night. That way, I can just fall asleep right away. It saves a lot of time.",
    source: "Ryan Reynolds",
    year: 2007
  },
  {
    quote: "Pretty wild that I talked in this voice even before I was the President. Imagine a regular guy sounding like this.",
    source: "Barack Obama",
    year: 2014
  },
  {
    quote: "Most of the time when I was kicking, I was kicking at bees.",
    source: "David Beckham",
    year: 2019
  },
  {
    quote: "When I pull my clothes out of the dryer, I glue the lint from the lint collector back onto my clothes. I paid for that lint.",
    source: "Clint Eastwood",
    year: 2019
  },
  {
    quote: "You know how athletes sometimes carry around huge jugs of water to drink? I do the same thing, but with a ziploc bag full of grape jelly.",
    source: "Chris Evans",
    year: 2010
  },
  {
    quote: "I respect these old men who play chess in the park. It takes a lot of courage to sit down on something that doesn't have a cushion.",
    source: "Dave Grohl",
    year: 2016
  },
  {
    quote: "My next monster will be a crouton. But it's not just any crouton. It's a crouton...with human legs!",
    source: "Guillermo del Toro",
  },
  {
    quote: "Clocks should have a third hand that you can firmly shake as a way to thank them for everything they do for us. Just saying thank you each time I check the time isn't enough.",
    source: "Anne Hathaway",
  },
];

/***
 * `getRandomQuote` function - I used arrow notation to create a function that procures a random object from my quotes array.
 * The two variables set are randomNumber, which stores a random number from 0 to 9 - the length of the array, and randomQuote, which stores the object that correlates to the number chosen.
 * Finally, I used "return" at the end to cause the function to produce the value of randomQuote when the function is called.
***/

const getRandomQuote = () => {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber];
  return randomQuote;
}

getRandomQuote();

/***
 * `printQuote` function - when called, produces a string of HTML based on the properties of the random quote object selected
 * This function starts by declaring the variable chosenQuote, which stores the result of the getRandomQuote function
 * Next, the variable quoteHTML is declared, and a string containing elements from the random quote object's quote and source properties
 * An if statement checks to see if the object has a citation property, and, if so, adds HTML string and the citation element
 * A second if statement checks to see if the object has a year property, and, if so, adds HTML string and the year element
 * A string of the closing </p> tag is concatenated onto whatever HTML string is produced from the conditionals
 * Finally, the value of the quoteHTML variable (an HTML string) is returned when the function is called.
***/

const printQuote = () => {
  let chosenQuote = getRandomQuote();
  let quoteHTML = 
    '<p class="quote">' + chosenQuote.quote + '</p>' +
     '<p class="source">' + chosenQuote.source;
     if (chosenQuote.citation) {
      quoteHTML += '<span class="citation">' + chosenQuote.citation + '</span> ';
    } if (chosenQuote.year) {
      quoteHTML += '<span class="year">' + chosenQuote.year + '</span> ';
    } 
  quoteHTML += '</p>';
  return quoteHTML;
}

document.getElementById('quote-box').innerHTML = printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);