// 문제. 왜 suzi.__proto__.getName()이 undefined가 나오는지 설명하시오.
// 분명 Person.prototype와 suzi.__proto__은 같다고 출력되었다. 근데 왜!! undefined가 나올까?
// 마지막으로 suzi.getName()이 되는 이유도 같이 설명해보길 바란다.

var Person = function (name) {
  this._name = name;
};

Person.prototype.getName = function () {
  return this._name;
};

var suzi = new Person("Suzi");

console.log(suzi.__proto__.getName()); // undefined
console.log(Person.prototype === suzi.__proto__); // true
console.log(suzi.getName()); // Suzi
