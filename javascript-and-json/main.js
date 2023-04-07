const books = [
  {
    author: 'Dr.Mime',
    title: 'Mimes',
    isbn: '11-222-5846-843546'
  },
  {
    author: 'John Doe',
    title: 'Hides from Us',
    isbn: '00-00-000-00000'
  },
  {
    author: 'Mike S',
    title: 'Fishing for dummies',
    isbn: '11-588-94467-8345'
  }
];
console.log('books', books, typeof books);

const stringName = JSON.stringify(books);
console.log('JSON', stringName, typeof stringName);

const test = '{"NumberID": "007", "StringName": "Jonny Boy"}';

console.log('test', test, typeof test);

const obj = JSON.parse(test);
console.log('obj', obj, typeof obj);
