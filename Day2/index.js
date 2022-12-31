const obj = {
  fn: function () {
    console.log(this);
  },
  fn2: () => {
    console.log(this);
  },
};
// obj.fn();
// obj.fn2();
// const person = {
//   name: "John",
// };
// const person2 = {
//   name: "Johnasdfas",
// };
// function x() {
//   console.log(this);
// }
// x.call(this);
// x.call(person);
// x.call(person2);
// const person = {
//   name: "John",
//   print: function () {
//     console.log(this);
//   },
// };
// const person2 = {
//   name: "Johnasdfas",
// };

// person.print();
// person.print.call();
// person.print.call(this);
// person.print.call(person2);
