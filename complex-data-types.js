const trainTicket = {
    startingStation: "London",
    endStation: "Reading",
    priceOfTicket: 12.32
};

console.log(trainTicket.startingStation);
console.log(trainTicket.endStation);
console.log(trainTicket.priceOfTicket);

const emptyObj = {};
emptyObj.firstName = "soy";
emptyObj.lastName = "nassir";
console.log(emptyObj.firstName);
console.log(emptyObj.lastName);

let library = [
    {
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        pages: 460
    },
    
    {
        title: "Programming JavaScript Applications",
        author: "Eric Elliott",
        pages: 254
    },
    
    {
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        pages: 352
    }
];

library.push({
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254
});

console.log(library.length);
console.log(library[0].title,library[0].author,library[0].pages);
console.log(library[1].title,library[1].author,library[1].pages);
console.log(library[2].title,library[2].author,library[2].pages);
console.log(library[3].title,library[3].author,library[3].pages);

let readABook = library.slice(2,4);
// console.log(readABook[1].title);

library.shift();
console.log(library.length);
console.log(library[0].title,library[0].author,library[0].pages);
console.log(library[1].title,library[1].author,library[1].pages);
console.log(library[2].title,library[2].author,library[2].pages);

const totalPages = library[0].pages + library[1].pages + library[2].pages;
console.log(totalPages);


