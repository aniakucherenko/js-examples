const friends = [
    { name: 'Mango', online: false },
    { name: 'Polly', online: true },
    { name: 'Kiwi', online: true },
];

console.table(friends);

for (const friend of friends) {
    console.log(friend);
}