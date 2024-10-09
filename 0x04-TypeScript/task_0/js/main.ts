interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const myobj: Student = {
  firstName: 'Mary',
  lastName: 'Maina',
  age: 25,
  location: 'Nairobi',
};
console.log(myobj.age);
