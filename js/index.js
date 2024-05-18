
//Variables
var quoteContentHTML = document.getElementById('quoteContent');
var quoteAuthorHTML = document.getElementById('quoteAuthor');
var quoteListIndexOld = 0;


//Objects
var quoteList = [{ content: 'Be yourself, everyone else is already taken.', author: 'Oscar Wilde' },
{ content: 'So many books, so little time.', author: 'Frank Zappa' },
{ content: 'Two things are infinite: the universe and human stupidity; and I m not sure about the universe.', author: 'Albert Einstein' },
{ content: 'A room without books is like a body without a soul', author: 'Marcus Tullius Cicero' },
{ content: 'You only live once, but if you do it right, once is enough', author: 'Mae West' },
{ content: 'If you tell the truth, you don t have to remember anything.', author: 'Mark Twain' },
]





//Function
function GetRandomQuote() {


    var quoteListIndex = Math.floor(Math.random() * quoteList.length);

    if (quoteListIndexOld !== quoteListIndex) {


        quoteContentHTML.innerHTML = '" ' + quoteList[quoteListIndex].content + ' "';
        quoteAuthorHTML.innerHTML = '-- ' + quoteList[quoteListIndex].author;

        quoteListIndexOld = quoteListIndex;



    }
    else {

        requestAnimationFrame(GetRandomQuote);

    }



}



