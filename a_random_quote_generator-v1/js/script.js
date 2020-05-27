/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
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
 * `getRandomQuote` function
***/

const getRandomQuote = () => {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber];
  console.log(randomNumber);
  console.log(randomQuote);
  return randomQuote;
}

getRandomQuote();

/***
 * `printQuote` function
 * Referenced https://medium.com/@hohanga/how-to-check-if-a-property-exists-in-a-javascript-object-1e1f5f1323e9 for info on how to check if a property exists within an object
***/

const printQuote = () => {
  let chosenQuote = getRandomQuote();
  let quoteHTML = 
    '<p class="quote">' + chosenQuote.quote + '</p>' +
     '<p class="source">' + chosenQuote.source;
     if (chosenQuote.citation) {
      quoteHTML += '<span class="citation">' + chosenQuote.citation + '</span> ';
    }
  console.log(quoteHTML);
}

printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);