// Business logic

let allQuotes = []
function Quote(quote_id, authorName, quote) {

    // property and method definitions
    this.quote_id = quote_id
    this.authorName = authorName;
    this.quote = quote;

}
Quote.prototype.saveQuote = function () {
    allQuotes.push(this)
    document.querySelector('#author').value='';
    document.querySelector('#quote').value='';
}
function refreshPage() {
    allQuotes.forEach((item) => {
        document.getElementById("all-quotes").innerHTML += "<blockquote class='blockquote'><p class='mb-0'>" + item.quote +
            "</blockquote><figcaption class='blockquote-footer'>" + item.authorName + "</figcaption></figure>"
    })

}

//   UI logic
document.getElementById('submitQuote').addEventListener('click', (event) => {
    event.preventDefault();
    var form = document.querySelector('#formQuote').value;
    var author = document.querySelector('#author').value;
    var quote = document.querySelector('#quote').value;
    if (author!='' && quote!=''){
    new_quote = new Quote(allQuotes.length + 1, author, quote)
    new_quote.saveQuote()
    
    }
    else{
        document.getElementById("warning").style.display = "inline-block";
        
    }

    refreshPage()

});
