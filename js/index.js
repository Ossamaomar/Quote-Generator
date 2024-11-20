var quoteContainer = document.getElementById("quoteContainer");
var prevIndex = 0;


// Array of quotes objects each object consists from the quote text, quote author and the author's picture
var quotesArray = [
{
    quoteText: "“Be yourself; everyone else is already taken.”",
    quoteAuthor: "-- Oscar Wilde",
    authorImg : "images/oscar.jpg"
}, 
{
    quoteText: "“In three words I can sum up everything I've learned about life: it goes on.”",
    quoteAuthor: "-- Robert Frost",
    authorImg : "images/robert.jpg"
},
{
    quoteText: "“So many books, so little time.”",
    quoteAuthor: "-- Frank Zappa",
    authorImg : "images/frank.jpg"
},
{
    quoteText: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    quoteAuthor: "-- Albert Einstein",
    authorImg : "images/einstein.jpg"
},
{
    quoteText: "“A room without books is like a body without a soul.”",
    quoteAuthor: "-- Marcus Tullius Cicero",
    authorImg : "images/marcus.jpg"
},
{
    quoteText: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    quoteAuthor: "-- Bernard M. Baruch",
    authorImg : "images/bernard.jpg"
},
{
    quoteText: "“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”",
    quoteAuthor: "-- William W. Purkey",
    authorImg : "images/william.jpg"
},
{
    quoteText: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    quoteAuthor: "-- Dr. Seuss",
    authorImg : "images/seuss.jpg"
},
{
    quoteText: "“You only live once, but if you do it right, once is enough.”",
    quoteAuthor: "-- Mae West",
    authorImg : "images/mae.jpg"
},
{
    quoteText: "“Be the change that you wish to see in the world.”",
    quoteAuthor: "-- Mahatma Gandhi",
    authorImg : "images/gandhi.jpg"
}];

function generateQuote() {
    var quoteIndex = generateRandNum(quotesArray.length - 1);
    var checkFlag = 0;
    quoteContainer.classList.add("fade-out");
    
    // Checking for if the previous quote index is the same of the new one if it is the same then regenerate a new ine untill they are not equal 
    while(checkFlag == 0){
        if (quoteIndex == prevIndex) {
            quoteIndex = generateRandNum(quotesArray.length - 1);
        }
        else
        {
            checkFlag = 1
        }
    }

    // Implemented a timeout function to handle the transition between each quote giving it the same duartion gave it to the opacity transition in CSS
    setTimeout(() => {
        
        quoteContainer.innerHTML = 
        `
        <img src="${quotesArray[quoteIndex].authorImg}" class="author-img rounded-circle">
        <p class="quote-text">${quotesArray[quoteIndex].quoteText}</p>
        <p class="quote-text">${quotesArray[quoteIndex].quoteAuthor}</p>
        
        `;
        quoteContainer.classList.remove("fade-out")
        
    }, 500);
    

    
    // Update the prevIndex for the next iteration
    prevIndex = quoteIndex;
    console.log(quoteIndex);
    
}

// generate a random number for to use it as a quote index
function generateRandNum(max) {
    return Math.floor(Math.random() * (max - 0 + 1));
}