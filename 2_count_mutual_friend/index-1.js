const friends = [
  ['Jason', 'Mary'],
  ['Mike', 'Mary'],
  ['Mike', 'Jason'],
  ['Susan', 'Jason'],
  ['John', 'Mary'],
  ['Susan', 'Mary']
];

const friendStats = friends.reduce((accumulator, friend_pair) => {
  const [person1, person2] = friend_pair;

  accumulator[person1] ??= [];
  accumulator[person2] ??= [];

  accumulator[person1].push(person2);
  accumulator[person2].push(person1);

  return accumulator;
}, {});

const mutualFriend = friends.map(([person1, person2]) => {
  const friend_of_person1 = friendStats[person1];
  const friend_of_person2 = friendStats[person2];
  const mutual_friend = friend_of_person1.filter(person => friend_of_person2.includes(person)).length;
  return [person1, person2, mutual_friend]
})

console.log(friendStats);
console.log(mutualFriend);
