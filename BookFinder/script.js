// Click handler for search button
const captureSearchValue = () => {
    const searchValue = document.getElementById('search-bar').value;
    return searchValue;
};

// Convert to lower-case and remove spaces
const cleanText = (text) => {
    return text.toLowerCase().replace(/\s+/g, '')
}

// Filter books based on search input
const filterBooks = (searchValue, bookList) => {
    const cleanSearchValue = searchValue.toLowerCase().replace(/\s+/g, '');
    const searchWords = cleanSearchValue.split(',');

    return bookList.filter((book) => {
        const cleanTitle = cleanText(book.title);
        const cleanAuthor = cleanText(book.author);
        const cleanTags = book.tags.map(tag => cleanText(tag));
        const titleMatch = searchWords.some(word => cleanTitle.includes(word));
        const authorMatch = searchWords.some(word => cleanAuthor.includes(word));
        const tagsMatch = searchWords.some(word => cleanTags.includes(word));
        return titleMatch || authorMatch || tagsMatch;
    });
};

// Structure filtered books as HTML and return
const bookAsHtml = (book) => {
    const bookDiv = document.createElement('div');
    bookDiv.setAttribute('class', 'bookDiv');

    const bookTitle = document.createElement('h2');
    bookTitle.innerHTML = book.title;
    bookTitle.setAttribute('class', 'bookTitle');

    const bookAuthor = document.createElement('h3');
    bookAuthor.innerHTML = book.author;

    const bookTags = document.createElement('p');
    bookTags.innerHTML = book.tags.join(',');

    bookDiv.append(bookTitle, bookAuthor, bookTags);

    return bookDiv;
};


// Iterate over list of filtered books, return list of books formatted as HTML
const filteredBooksAsHtml = (filteredBooks) => {
    const bookHtml = [];
    for (let book = 0; book < filteredBooks.length; book++) {
        bookHtml.push(bookAsHtml(filteredBooks[book]));
    }
    return bookHtml;
};

// Take array of filtered books in HTML format and render them to DOM
const renderBooksToDom = (htmlBooks) => {
    const bookListContainer = document.querySelector("#bookList");
    bookListContainer.innerHTML = "";
  
    bookListContainer.append(...htmlBooks);
  };


// Handler triggered when user clicks "Search" button.
// Chain functions together to filter books based on search value then render results to DOM
const searchBtnClickHandler = (bookList) => {
    const search = captureSearchValue();
    const filteredBooks = filterBooks(search, bookList);
    const htmlBooks = filteredBooksAsHtml(filteredBooks);
    renderBooksToDom(htmlBooks);
};

// Get search button from DOM
searchBtn = document.getElementById('search-btn');

// Event listener for search button
searchBtn.addEventListener('click', () => {
    searchBtnClickHandler(books);
    });



