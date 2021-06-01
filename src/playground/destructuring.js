// Object Destructuring
const book = {
    title: "Ego is the Enemy",
    author: "Ryan Holiday",
    publisher: {
        // name: "Penguin"
    }
}
const { name: publisherName = "Self-Published" } = book.publisher
console.log(publisherName);

// Array destructuring
const address = ["1299 S Juniper Street", "Philadelphia", "Pennsylvania", "19147"];
console.log(`You are in ${address[1]} ${address[2]}`);

const [,city, state="New York"] = address;
console.log(`You really are in ${city} ${state}`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75" ];
const [product,,m_price] = item;
console.log(`A medium ${product} cost ${m_price}`);
