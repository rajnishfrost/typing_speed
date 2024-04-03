let arr = [
    { name: "Mike", age: 28, tags: ["cricket", "tech", "music"] },
    { name: "Anna", age: 32, tags: ["reading", "hobbies", "server"] },
    { name: "John", age: 24, tags: ["hobbies", "coding", "cricket"] },
    { name: "Sophia", age: 29, tags: ["fitness", "hobbies", "computer"] },
   
];

const tagsToRemove = ["tech", "computer", "server", "coding"];

// Remove specified tags from each object's tags array
 arr.forEach(person => {
    person.tags = person.tags.filter(tag => !tagsToRemove.includes(tag))
});

console.log(arr);