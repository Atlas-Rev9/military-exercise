let recruitName = 'Rugen';
let recruitRank = 'Count';
let recruitAge = 41;

if (recruitAge < 18) {
    console.log('You are too young for the military!');
} else if (recruitName === 'Rugen' && recruitRank === 'Count') {
    console.log('My name is Inigo Montoya, you killed my father, prepare to die.');
} else if (recruitRank === 'Captain') {
    console.log(`Aye Aye Captain ${recruitName}.`);
} else if (recruitRank === 'Private' && recruitAge > 40) {
    console.log(`What have you been doing with your life ${recruitName}`);
} else {
    console.log(`Hello ${recruitRank} ${recruitName}, I cannot wait to celebrate your ${recruitAge + 1}th birthday next year!`);
};