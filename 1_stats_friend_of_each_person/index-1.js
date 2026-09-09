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
  const current_friend_of_person1 = accumulator[person1] || [];
  const current_friend_of_person2 = accumulator[person2] || [];
  
  accumulator[person1] = [...current_friend_of_person1, person2]

  accumulator[person2] = [...current_friend_of_person2, person1]

  return accumulator;
}, {});

console.log(friendStats);


const friendStats2 = friends.reduce((accumulator, friend_pair) => {
  const [person1, person2] = friend_pair;

  accumulator[person1] ??= [];
  accumulator[person2] ??= [];

  accumulator[person1].push(person2);
  accumulator[person2].push(person1);

  return accumulator;
}, {});

/**
 * {
  Jason: [ 'Mary', 'Mike', 'Susan' ],
  Mary: [ 'Jason', 'Mike', 'John', 'Susan' ],
  Mike: [ 'Mary', 'Jason' ],
  Susan: [ 'Jason', 'Mary' ],
  John: [ 'Mary' ]
}
 */