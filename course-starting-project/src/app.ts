enum age {
  new,
  old,
}

const person: { name: string; age: number; hobbies: string[]; role: age } = {
  name: 's',
  age: 20,
  hobbies: ['reading', 'cooking'],
  role: age.new,
};

const nane: string = '';

const hobbies = ['cooking', 'painting'];
const activehobbies = ['pnig pong'];

activehobbies.push(...hobbies);

console.log(activehobbies);
