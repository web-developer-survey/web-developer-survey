const fs = require('fs');

const book = {
  title: 'Harry Potter and the Chamber of Secrets',
  author: 'J.K. Rowling',
};

const bookJSON = JSON.stringify(book);

fs.writeFileSync('book.json', bookJSON);
