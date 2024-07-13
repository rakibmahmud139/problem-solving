// 1.Task: Array Filtering And Mapping

const persons = [
  { name: "Rakib", age: 20, gender: "male" },
  { name: "Rayhan", age: 19, gender: "male" },
  { name: "Afra", age: 20, gender: "female" },
  { name: "Saikat", age: 17, gender: "male" },
  { name: "Kahifa", age: 20, gender: "female" },
];

const getNames = (items) => {
  const personsName = items
    .filter((item) => item.gender === "male")
    .map((item) => item.name);

  return personsName;
};

const names = getNames(persons);

console.log(names);

//2.Task: Object Manipulation

const books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
];

const getBooksName = (items) => {
  const booksTitle = items.map((item) => item.title);

  return booksTitle;
};

const booksTitle = getBooksName(books);

console.log(booksTitle);
